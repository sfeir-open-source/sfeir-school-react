import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { range } from "../utils";

type CarouselProps = {
  children: React.ReactElement[];
};

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  useState()

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini />

      <div className="carousel">

        {React.cloneElement(children[0], { className: "prev"})}
        {React.cloneElement(children[1], { className: "current"})}
        {React.cloneElement(children[2], { className: "next"})}

        Display PersonCards here. The current needs to have className="current",
        the previous "prev" and the next "next" respectively. Use
        React.cloneElement to add className prop to children
      </div>
      <Fab icon="skip_next" mini />
    </div>
  );
};
