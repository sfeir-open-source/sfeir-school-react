import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { range } from "../utils";

type CarouselProps = {
  children: React.ReactElement[];
};

//Display PersonCards here. The current needs to have className="current",
//the previous "prev" and the next "next" respectively. Use
//React.cloneElement to add className prop to children
export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setIdx] = useState(0);
  const { pred, succ } = range(0, React.Children.count(children) - 1);
  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={() => setIdx(pred)} />
      <div className="carousel">
        {React.Children.map(children, (child, childIndex) => {
          let additional = {};
          if (childIndex === currentIndex) {
            additional = { className: "current" };
          }
          if (childIndex === succ(currentIndex)) {
            additional = { className: "next" };
          }
          if (childIndex === pred(currentIndex)) {
            additional = { className: "prev" };
          }
          return React.cloneElement(child, additional);
        })}
      </div>
      <Fab icon="skip_next" mini onClick={() => setIdx(succ)} />
    </div>
  );
};
