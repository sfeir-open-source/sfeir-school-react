import { ArrowBack, ArrowForward, Pause, PlayArrow } from '@mui/icons-material';
import MuiFab from '@mui/material/Fab';
import MuiStack from '@mui/material/Stack';
import { PersonCard } from './PersonCard';
import { useCallback, useEffect, useRef, useState } from 'react';

interface CarouselProps {
  people: People;
}

export function Carousel({ people }: CarouselProps) {
  const { currentPerson, carouselState, onPreviousClick, onNextClick, onPlayClick, onPauseClick } = useCarousel(people);

  return (
    <section className="carousel">
      <MuiFab size="small" color="default" aria-label="previous" onClick={onPreviousClick}>
        <ArrowBack />
      </MuiFab>
      <PersonCard person={currentPerson} />
      <MuiStack spacing={1}>
        {carouselState === 'PLAY' ? (
          <MuiFab size="small" color="default" aria-label="pause" onClick={onPauseClick}>
            <Pause />
          </MuiFab>
        ) : (
          <MuiFab size="small" color="default" aria-label="play" onClick={onPlayClick}>
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

type CarouselState = 'PLAY' | 'PAUSE';

function useCarousel(people: Person[]) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const currentPerson = people[currentPersonIndex];
  const [carouselState, setCarouselState] = useState<CarouselState>('PLAY');
  const playIntervalRef = useRef<number>(-1);

  const onPreviousClick = () =>
    setCurrentPersonIndex(currentPersonIndex === 0 ? people.length - 1 : currentPersonIndex - 1);
  const onNextClick = useCallback(
    () => setCurrentPersonIndex(currentPersonIndex === people.length - 1 ? 0 : currentPersonIndex + 1),
    [currentPersonIndex, people.length]
  );
  const onPauseClick = () => setCarouselState('PAUSE');
  const onPlayClick = () => setCarouselState('PLAY');

  useEffect(() => {
    if (carouselState === 'PLAY') {
      playIntervalRef.current = setInterval(onNextClick, 2_000);
      return () => {
        clearInterval(playIntervalRef.current);
        playIntervalRef.current = -1;
      };
    } else if (playIntervalRef.current != -1) {
      clearInterval(playIntervalRef.current);
    }
  }, [carouselState, playIntervalRef, onNextClick]);

  return { currentPerson, carouselState, onPreviousClick, onNextClick, onPlayClick, onPauseClick };
}
