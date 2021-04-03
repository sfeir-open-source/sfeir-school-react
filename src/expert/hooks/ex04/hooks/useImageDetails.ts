import { useEffect, useState } from "react";
import { ImageDetails } from "../types";

type UseImageDetails = ImageDetails | undefined;
export default function useImageDetails(url: string): UseImageDetails {
  const [image, setImage] = useState<ImageDetails>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setImage);
  }, [url]);

  return image;
}
