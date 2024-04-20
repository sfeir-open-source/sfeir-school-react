import { ArrowBack, ArrowForward, Pause, PlayArrow } from '@mui/icons-material';
import MuiFab from '@mui/material/Fab';
import MuiStack from '@mui/material/Stack';
import { PersonCard } from './PersonCard';
import { useState } from 'react';

interface CarouselProps {
  people: People;
}

type CarouselState = 'PLAY' | 'PAUSE';

export function Carousel({ people }: CarouselProps) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const currentPerson = people[currentPersonIndex];
  const carouselState: CarouselState = 'PLAY';

  const onPreviousClick = () =>
    setCurrentPersonIndex(currentPersonIndex === 0 ? people.length - 1 : currentPersonIndex - 1);
  const onNextClick = () =>
    setCurrentPersonIndex(currentPersonIndex === people.length - 1 ? 0 : currentPersonIndex + 1);

  return (
    <section className="carousel">
      <MuiFab size="small" color="default" aria-label="previous" onClick={onPreviousClick}>
        <ArrowBack />
      </MuiFab>
      <PersonCard person={currentPerson} />
      <MuiStack spacing={1}>
        {carouselState === 'PLAY' ? (
          <MuiFab size="small" color="default" aria-label="pause" onClick={() => {}}>
            <Pause />
          </MuiFab>
        ) : (
          <MuiFab size="small" color="default" aria-label="play" onClick={() => {}}>
            <PlayArrow />
          </MuiFab>
        )}
        <MuiFab size="small" color="default" aria-label="next" onClick={onNextClick}>
          <ArrowForward />
        </MuiFab>
      </MuiStack>
    </section>
  );
}
