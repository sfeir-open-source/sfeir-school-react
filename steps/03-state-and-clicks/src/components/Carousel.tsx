import { ArrowBack, ArrowForward } from '@mui/icons-material';
import MuiFab from '@mui/material/Fab';
import { PersonCard } from './PersonCard';

interface CarouselProps {
  people: People;
}

export function Carousel({ people }: CarouselProps) {
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  return (
    <section className="carousel">
      <MuiFab size="medium" color="default" aria-label="previous">
        <ArrowBack />
      </MuiFab>
      <PersonCard person={randomPerson} />
      <MuiFab size="medium" color="default" aria-label="previous">
        <ArrowForward />
      </MuiFab>
    </section>
  );
}
