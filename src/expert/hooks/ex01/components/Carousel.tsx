import React from "react";
import Details from "./Details";
import Thumbnails from "./Thumbnails";

export default function Carousel(): JSX.Element {
  return (
    <div className="Carousel">
      <div className="Carousel-Container">
        <button className="selector-button selector-button-previous">
          &#8249;
        </button>

        {/*
         * TODO : manage selection and pass URL as props
         */}
        <Details url={null} />

        <button className="selector-button selector-button-next">
          &#8250;
        </button>
      </div>

      {/*
       * TODO : manage available images and pass as props to Thumbnails
       * TODO : manage selection an pass as props to Thumbnails
       */}

      {/* eslint-disable-next-line */}
      <Thumbnails data={[]} selected={null} onSelectionChange={() => {}} />
    </div>
  );
}
