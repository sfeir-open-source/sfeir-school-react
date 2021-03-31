import React from "react";

import { PersonCard } from "../solution/PersonCard";
import {setNextIndex, setPreviousIndex} from "./Carousel.utils";

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

type CarouselState = {
  currentIndex: number;
}

export class CarouselComponent extends React.Component<CarouselProps, CarouselState> {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
  }

  onNext = () => {
    this.setState(setNextIndex);
  };

  onPrevious = () => {
    this.setState(setPreviousIndex);
  };

  render() {
    return (
        <div className="flex-row">
          <Fab icon="skip_previous" clickEvent={this.onPrevious} />
          <div className="carousel">
            <PersonCard person={this.props.people[this.state.currentIndex]} className="current" />
          </div>
          <Fab icon="skip_next" clickEvent={this.onNext} />
        </div>
    );
  }
}
