import React from "react";
import useImages from "../hooks/useImages";
import useAutoplay from "../hooks/useAutoplay";
import Action from "./Action";
import Details from "./Details";
import Thumbnails from "./Thumbnails";

export default function Carousel(): JSX.Element {
  const {
    selected,
    images,
    handlePrevious,
    handleNext,
    handleChange,
  } = useImages();

  const { autoplay, setAutoplay, time } = useAutoplay(selected, handleNext);

  return (
    <div className="Carousel">
      {images ? (
        <>
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

            <Action
              autoplay={autoplay}
              onAutoplayChange={setAutoplay}
              time={time}
            />
          </div>

          <Thumbnails
            data={images}
            selected={selected}
            onSelectionChange={handleChange}
          />
        </>
      ) : (
        <div className="loading">Loading ...</div>
      )}
    </div>
  );
}
