import { ArrowBack, ArrowForward, Pause, PlayArrow } from '@mui/icons-material';
import MuiStack from '@mui/material/Stack';
import { PersonCard } from './PersonCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import { withFab } from './withFab';

interface CarouselProps {
  people: People;
}

const PreviousFab = withFab(ArrowBack, 'previous');
const NextFab = withFab(ArrowForward, 'next');
const PauseFab = withFab(Pause, 'pause');
const PlayFab = withFab(PlayArrow, 'play');

export function Carousel({ people }: CarouselProps) {
  const { currentPerson, carouselState, onPreviousClick, onNextClick, onPlayClick, onPauseClick } = useCarousel(people);

  return (
    <section className="carousel">
      <PreviousFab onClick={onPreviousClick} />
      <PersonCard person={currentPerson} />
      <MuiStack spacing={1}>
        {carouselState === 'PLAY' ? <PauseFab onClick={onPauseClick} /> : <PlayFab onClick={onPlayClick} />}
        <NextFab onClick={onNextClick} />
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
