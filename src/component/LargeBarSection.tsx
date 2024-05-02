import { Children, ReactNode } from "react";
import Button from "./Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

type LargeBarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount: number;
};

const LargeBarSection = ({
  children,
  visibleItemCount = Number.POSITIVE_INFINITY,
  title,
}: LargeBarSectionProps) => {
  const [showMoreItems, setShowMoreItems] = React.useState(false);
  //Convert children to array & make them visible
  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = showMoreItems
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  //ShowmoreButton
  const showMoreButton = childrenArray.length > visibleItemCount;

  const ButtonIcon = showMoreItems ? ChevronUp : ChevronDown;

  return (
    <div>
      {title ? <div className="ml-4 mt-2 text-lg mb1">{title}</div> : ""}
      {visibleChildren}

      {showMoreButton ? (
        <Button
          onClick={() => setShowMoreItems((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{showMoreItems ? "Show Less" : "Show More"}</div>
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default LargeBarSection;
