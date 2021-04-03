import React, { useCallback, useEffect, useState } from "react";
import Action from "./Action";
import Details from "./Details";
import Thumbnails from "./Thumbnails";

const DEFAULT_TIMER = 3000;

interface Image {
  id: string;
  thumbnailUrl: string;
  details: string;
}

export default function Carousel(): JSX.Element {
  const [images, setImages] = useState<Image[]>(undefined);
  const [selected, setSelected] = useState<Image | null>(null);
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [elapsed, setElapsed] = useState<number>(0);

  const handleNext = useCallback(() => {
    setSelected((selected) => {
      const selectedIndex = images.indexOf(selected);
      const nextIndex = (selectedIndex + 1) % images.length;

      return images[nextIndex];
    });
  }, [images]);

  const handlePrevious = () => {
    const selectedIndex = images.indexOf(selected);
    const previousIndex = (images.length + selectedIndex - 1) % images.length;

    setSelected(images[previousIndex]);
  };

  useEffect(() => {
    fetch("http://localhost:1337")
      .then((res) => res.json())
      .then((images) => {
        setImages(images);
        setSelected(images[0]);
        setAutoplay(true);
      });
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, DEFAULT_TIMER);

      return () => clearInterval(interval);
    }
  }, [autoplay, selected, handleNext]);

  useEffect(() => {
    setElapsed(0);

    if (autoplay) {
      const start = performance.now();
      const interval = setInterval(() => {
        setElapsed(performance.now() - start);
      }, 30);

      return () => clearInterval(interval);
    }
  }, [autoplay, selected]);

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

            <Thumbnails
              data={images}
              selected={selected}
              onSelectionChange={setSelected}
            />

            <Action
              autoplay={autoplay}
              onAutoplayChange={setAutoplay}
              time={(elapsed / DEFAULT_TIMER) * 100}
            />
          </div>
        </>
      ) : (
        <div className="loading">Loading ...</div>
      )}
    </div>
  );
}
