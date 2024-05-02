import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import SmallSideBarItem from "../component/SmallSideBarItem";

const SideBar = () => {
  return (
    <aside className="flex flex-col lg:hidden sticky top-0 ml-2">
      <SmallSideBarItem Icon={Home} title="Home" url="/" />
      <SmallSideBarItem Icon={Repeat} title="Shorts" url="/shorts" />
      <SmallSideBarItem
        Icon={Clapperboard}
        title="Subscriptions"
        url="/subscriptions"
      />
      <SmallSideBarItem Icon={Library} title="Libary" url="/libary" />
    </aside>
  );
};

export default SideBar;
