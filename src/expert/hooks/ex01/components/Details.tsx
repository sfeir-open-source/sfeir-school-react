import React from "react";

interface Props {
  url?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Details({ url }: Props): JSX.Element {
  /*
   * Fetch url to get Details,
   * Store response to state
   * Mind your dependencies !
   */
  const image = null;

  return (
    <div className="Details">
      {image && (
        <>
          <div className="Image-info">
            <div className="Image-top">
              <span className="Image-top-username">{image.username}</span>
              <span>{new Date(image.date).toLocaleDateString()}</span>
            </div>
            <div className="Image-description">{image.description}</div>
            <div className="Image-keywords">
              {image.keywords.map((k) => `#${k}`).join(", ")}
            </div>
          </div>

          <img
            src={image.imageUrl}
            alt={image.description}
            width="900"
            height={900 / 1.5}
          />
        </>
      )}
    </div>
  );
}
