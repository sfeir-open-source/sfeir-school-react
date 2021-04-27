import React from "react";
import { Image } from "../../dto";

interface Props {
  data: Image[];
  selected?: Image;
  onSelectionChange: (image: Image) => void;
}

export default function Thumbnails({
  data,
  selected,
  onSelectionChange,
}: Props): JSX.Element {
  return (
    <div className="Thumbnails">
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
