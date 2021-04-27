import React from "react";
import useImages from "../hooks/useImages";
import Thumbnails from "./Thumbnails";

import { UseImages } from "../hooks/useImages";
import Main from "./Main";
export const CarouselContext = React.createContext<UseImages>(undefined);

export default function Carousel(): JSX.Element {
  const images = useImages();

  return (
    <div className="Carousel">
      <CarouselContext.Provider value={images}>
        {images.initialized ? (
          <>
            <Main />
            <Thumbnails />
          </>
        ) : (
          <div className="loading">Loading ...</div>
        )}
      </CarouselContext.Provider>
    </div>
  );
}
