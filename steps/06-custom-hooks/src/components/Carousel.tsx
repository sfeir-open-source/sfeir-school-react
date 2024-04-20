import { ArrowBack, ArrowForward, Pause, PlayArrow } from '@mui/icons-material';
import MuiFab from '@mui/material/Fab';
import MuiStack from '@mui/material/Stack';
import { PersonCard } from './PersonCard';
import { useCallback, useEffect, useRef, useState } from 'react';

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
  const onNextClick = useCallback(
    () => setCurrentPersonIndex(currentPersonIndex === people.length - 1 ? 0 : currentPersonIndex + 1),
    [currentPersonIndex, people.length]
  );

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
