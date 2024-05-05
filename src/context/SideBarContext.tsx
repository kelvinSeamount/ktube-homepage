import React, { ReactNode, createContext } from "react";

type SideBarContextProps = {
  children: ReactNode;
};

//props for context
type SideBarContextPropsType = {
  close: () => void;
  toggle: () => void;
  isOpenLarge: boolean;
  isOpenSmall: boolean;
};

const SidebarContext = React.createContext<SideBarContextPropsType | null>(
  null
);

export function useSidebarContext() {
  const value = createContext(SidebarContext);
  if (value == null) throw Error("Cannot use outside of SidebarProvider");

  return value;
}

const SideBarProvider = ({ children }: SideBarContextProps) => {
  const [isOpenLarge, setIsOpenLarge] = React.useState(true);
  const [isOpenSmall, setIsOpenSmall] = React.useState(false);

  //function handling small creen
  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  function toggle() {
    if (isScreenSmall()) {
      setIsOpenSmall(!isOpenSmall);
    } else {
      setIsOpenLarge(!isOpenLarge);
    }
  }

  function close() {
    if (isScreenSmall()) {
      setIsOpenSmall(false);
    } else {
      setIsOpenLarge(false);
    }
  }

  return (
    <SidebarContext.Provider
      value={{ isOpenLarge, isOpenSmall, toggle, close }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
export default SideBarProvider;
