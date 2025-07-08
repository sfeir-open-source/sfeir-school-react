import { ArrowBack, ArrowForward, Pause, PlayArrow } from '@mui/icons-material';
import MuiFab from '@mui/material/Fab';
import MuiStack from '@mui/material/Stack';
import { PersonCard } from './PersonCard';
import { useEffect, useRef, useState } from 'react';

interface CarouselProps {
  people: People;
}

type CarouselState = 'PLAY' | 'PAUSE';

export function Carousel({ people }: CarouselProps) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const currentPerson = people[currentPersonIndex];
  const [carouselState, setCarouselState] = useState<CarouselState>('PLAY');
  const playIntervalRef = useRef<number>(-1);

  const onPreviousClick = () =>
    setCurrentPersonIndex(currentPersonIndex === 0 ? people.length - 1 : currentPersonIndex - 1);
  const onNextClick = () =>
    setCurrentPersonIndex(currentPersonIndex === people.length - 1 ? 0 : currentPersonIndex + 1);

  useEffect(() => {
    if (carouselState === 'PLAY') {
      playIntervalRef.current = window.setInterval(() => {
        setCurrentPersonIndex((prevIndex) => (prevIndex === people.length - 1 ? 0 : prevIndex + 1));
      }, 2_000);
      return () => clearInterval(playIntervalRef.current);
    } else {
      clearInterval(playIntervalRef.current);
    }
  }, [people.length, carouselState]);

  return (
    <section className="carousel">
      <MuiFab size="small" color="default" aria-label="previous" onClick={onPreviousClick}>
        <ArrowBack />
      </MuiFab>
      <PersonCard person={currentPerson} />
      <MuiStack spacing={1}>
        {carouselState === 'PLAY' ? (
          <MuiFab size="small" color="default" aria-label="pause" onClick={() => setCarouselState('PAUSE')}>
            <Pause />
          </MuiFab>
        ) : (
          <MuiFab size="small" color="default" aria-label="play" onClick={() => setCarouselState('PLAY')}>
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
