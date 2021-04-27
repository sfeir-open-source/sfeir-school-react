import React, { useContext } from "react";
import { CarouselContext } from "./Carousel";

export default function Thumbnails(): JSX.Element {
  const {
    images: data,
    handleChange: onSelectionChange,
    selected,
  } = useContext(CarouselContext);

  return (
    <div className="thumbnails">
      {data.map((item) => (
        <button key={item.id} onClick={() => onSelectionChange(item)}>
          <img
            className={selected && item === selected ? "selected" : ""}
            src={item.thumbnailUrl}
            alt={item.description}
          />
        </button>
      ))}
    </div>
  );
}
