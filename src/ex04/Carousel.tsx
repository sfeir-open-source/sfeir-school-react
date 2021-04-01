import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

type CarouselProps = {
  children: React.ReactElement[];
};

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextIndex = currentIndex === children.length-1 ? 0 : currentIndex + 1;
  const previousIndex = currentIndex === 0 ? children.length-1 : currentIndex - 1;

  const onNext = () => {
    setCurrentIndex(nextIndex);
  };
  const onPrevious = () => {
    setCurrentIndex(previousIndex);
  };

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={onPrevious}/>

      <div className="carousel">

        {React.cloneElement(children[previousIndex], { className: "prev"})}
        {React.cloneElement(children[currentIndex], { className: "current"})}
        {React.cloneElement(children[nextIndex], { className: "next"})}

      </div>

      <Fab icon="skip_next" mini onClick={onNext}/>
    </div>
  );
};
