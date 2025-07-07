import React from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import MuiFab from '@mui/material/Fab';
import { PersonCard } from './PersonCard';

interface CarouselProps {
  people: People;
}

interface CarouselState {
  randomPersonIndex: number;
}

export class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      randomPersonIndex: Math.floor(Math.random() * props.people.length),
    };
  }

  render() {
    const { people } = this.props;
    const randomPerson = people[this.state.randomPersonIndex];

    return (
      <section className="carousel">
        <MuiFab size="medium" color="default" aria-label="previous">
          <ArrowBack />
        </MuiFab>
        <PersonCard person={randomPerson} />
        <MuiFab size="medium" color="default" aria-label="next">
          <ArrowForward />
        </MuiFab>
      </section>
    );
  }
}
