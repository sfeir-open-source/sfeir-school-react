import React, { useContext } from "react";
import useAutoplay from "../hooks/useAutoplay";
import Action from "./Action";
import { CarouselContext } from "./Carousel";
import Details from "./Details";

export default function Main(): JSX.Element {
  const { handlePrevious, handleNext, selected } = useContext(CarouselContext);
  const { autoplay, setAutoplay, time } = useAutoplay(selected, handleNext);

  return (
    <div className="Carousel-container">
      <button
        className="selector-button selector-button-previous"
        onClick={handlePrevious}
      >
        &#8249;
      </button>

      <Details url={selected?.details} />

      <button
        className="selector-button selector-button-next"
        onClick={handleNext}
      >
        &#8250;
      </button>

      <Action autoplay={autoplay} onAutoplayChange={setAutoplay} time={time} />
    </div>
  );
}
