import React, { useState } from "react";

import { PersonCard } from "../solution/PersonCard";
import { range } from "../utils";
import { isTemplateExpression } from "typescript";

// cycle through the people array when clicking the previous
// and the next buttons. Look in ../utils.js for some utility
// functions you may need.

type FabProps = {
  icon: string;
  onClick: () => void;
};

const Fab: React.FC<FabProps> = ({ icon, onClick }) => (
  <button className="mdc-fab mdc-fab--mini" onClick={onClick}>
    <i className="rmwc-icon material-icons mdc-fab__icon">{icon}</i>
  </button>
);

type CarouselProps = {
  people: People;
};

export const Carousel: React.FC<CarouselProps> = ({ people }) => {
  const [current, setCurrent] = useState(1);
  const { succ, pred } = range(0, people.length - 1);

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" onClick={() => setCurrent(pred)} />
      <div className="carousel">
        <PersonCard person={people[current]} className="current" />
      </div>
      <Fab icon="skip_next" onClick={() => setCurrent(succ)} />
    </div>
  );
};

// when you are done:
// replace the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs
