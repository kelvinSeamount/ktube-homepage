import { ElementType } from "react";
import { buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";

type SmallSideBarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};
const SmallSideBarItem = ({ Icon, title, url }: SmallSideBarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "flex flex-col items-center rounded-lg py-4 px-1 gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
};

export default SmallSideBarItem;
