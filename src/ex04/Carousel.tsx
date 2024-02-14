import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { range } from "../utils";

type CarouselProps = {
  children: React.ReactElement[];
};

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const currentChild = React.Children.toArray(children)[current];
  const { succ, pred } = range(0, children.length - 1);
  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={() => setCurrent(pred)} />
      <div className="carousel">
        {React.cloneElement(currentChild, { className: "current" })}
      </div>
      <Fab icon="skip_next" mini onClick={() => setCurrent(succ)} />
    </div>
  );
};
