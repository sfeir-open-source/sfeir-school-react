import React, {useState} from "react";

import { PersonCard } from "../solution/PersonCard";

type FabProps = {
  icon: string;
  clickEvent: React.MouseEventHandler<any>
};

const Fab: React.FC<FabProps> = ({ icon, clickEvent }) => (
  <button className="mdc-fab mdc-fab--mini" onClick={clickEvent}>
    <i className="rmwc-icon material-icons mdc-fab__icon">{icon}</i>
  </button>
);

type CarouselProps = {
  people: People;
};

export const Carousel: React.FC<CarouselProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = () => {
    setCurrentIndex(currentIndex === props.people.length-1 ? 0 : currentIndex + 1);
  };
  const onPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? props.people.length-1 : currentIndex - 1);
  };

  return (
      <div className="flex-row">
        <Fab icon="skip_previous" clickEvent={onPrevious} />
        <div className="carousel">
          <PersonCard person={props.people[currentIndex]} className="current" />
        </div>
        <Fab icon="skip_next" clickEvent={onNext} />
      </div>
  );
}

