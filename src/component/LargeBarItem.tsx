import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

type LargeBarItemProps = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive: boolean;
};
const LargeBarItem = ({
  IconOrImgUrl,
  isActive = false,
  title,
  url,
}: LargeBarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        } w-full flex items-center rounded-lg gap-4 p-3`
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImgUrl className="w-6 h-6" />
      )}

      <div className="whitespace-nowrap text-ellipsis overflow-hidden">
        {title}
      </div>
    </a>
  );
};

export default LargeBarItem;
