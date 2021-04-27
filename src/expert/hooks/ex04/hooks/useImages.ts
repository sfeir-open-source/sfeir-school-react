import { useState, useEffect, useCallback } from "react";
import { Image } from "../types";

interface UseImages {
  selected: Image | null;
  images?: Image[];
  handlePrevious: () => void;
  handleNext: () => void;
  handleChange: (image: Image) => void;
}

export default function useImages(): UseImages {
  const [images, setImages] = useState<Image[]>(undefined);
  const [selected, setSelected] = useState<Image | null>(null);

  const handleNext = useCallback(() => {
    setSelected((selected) => {
      const selectedIndex = images.indexOf(selected);
      const nextIndex = (selectedIndex + 1) % images.length;

      return images[nextIndex];
    });
  }, [images]);

  const handlePrevious = useCallback(() => {
    setSelected((selected) => {
      const selectedIndex = images.indexOf(selected);
      const previousIndex = (images.length + selectedIndex - 1) % images.length;

      return images[previousIndex];
    });
  }, [images]);

  useEffect(() => {
    fetch("http://localhost:1337")
      .then((res) => res.json())
      .then((images) => {
        setImages(images);
        setSelected(images[0]);
      });
  }, []);

  return {
    selected,
    images,
    handlePrevious,
    handleNext,
    handleChange: setSelected,
  };
}
