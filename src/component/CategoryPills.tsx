import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import React, { useEffect } from "react";

type CategoryPillsProps = {
  categories: string[];
  selectedCategory: string;
  onselect: (category: string) => void;
};

//Set  up a translate pixel  for the button to move in and out of view.
const TRANSLATE_AMOUNT = 200;

const CategoryPills = ({
  categories,
  selectedCategory,
  onselect,
}: CategoryPillsProps) => {
  const [translate, setTranslate] = React.useState(0); //How much is it translated?
  const [leftVisible, setLeftVisible] = React.useState(false);
  const [rightVisible, setRightVisible] = React.useState(false);
  const containerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (containerRef.current === null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;
      setLeftVisible(translate > 0);
      setRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [categories, containerRef, translate]);

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onselect(category)}
            variant={selectedCategory === category ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      {leftVisible ? (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      ) : (
        ""
      )}

      {rightVisible ? (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }
                const newTranslate = translate + TRANSLATE_AMOUNT;

                //width left to right
                const edge = containerRef.current.scrollWidth;

                //full  visible width
                const width = containerRef.current.clientWidth;
                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CategoryPills;
