import React, { useEffect, useState } from "react";
import { Image } from "../../dto";
import Action from "./Action";
import Details from "./Details";
import Thumbnails from "./Thumbnails";

export default function Carousel(): JSX.Element {
  const [images, setImages] = useState<Image[]>(undefined);
  const [selected, setSelected] = useState<Image | null>(null);

  useEffect(() => {
    fetch("http://localhost:1337")
      .then((res) => res.json())
      .then((images) => {
        setImages(images);
        setSelected(images[0]);
      });
  }, []);

  const handleNext = () => {
    const selectedIndex = images.indexOf(selected);
    const nextIndex = (selectedIndex + 1) % images.length;

    setSelected(images[nextIndex]);
  };

  const handlePrevious = () => {
    const selectedIndex = images.indexOf(selected);
    const previousIndex = (images.length + selectedIndex - 1) % images.length;

    setSelected(images[previousIndex]);
  };

  return (
    <div className="Carousel">
      {images ? (
        <>
          <div className="Carousel-container">
            <button
              className="selector-button selector-button-previous"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              &#8249;
            </button>

            <Details url={selected?.details} />

            <button
              className="selector-button selector-button-next"
              onClick={handleNext}
              aria-label="Next image"
            >
              &#8250;
            </button>

            <Action autoplay={false} onAutoplayChange={() => {}} time={0} />
          </div>
          <Thumbnails
            data={images}
            selected={selected}
            onSelectionChange={setSelected}
          />
        </>
      ) : (
        <div className="loading">Loading ...</div>
      )}
    </div>
  );
}
