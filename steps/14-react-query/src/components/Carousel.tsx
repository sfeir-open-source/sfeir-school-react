import { ArrowBack, ArrowForward, Pause, PlayArrow } from '@mui/icons-material';
import MuiStack from '@mui/material/Stack';
import { PersonCard } from './PersonCard';
import { useEffect, useRef } from 'react';
import { withFab } from './withFab';
import { useDispatch, useSelector } from 'react-redux';
import { carouselActions, selectCurrentPerson, selectPlayStatus } from '../store/carousel-slice';

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
      {currentPerson && <PersonCard person={currentPerson} />}
      <MuiStack spacing={1}>
        {carouselState === 'PLAY' ? <PauseFab onClick={onPauseClick} /> : <PlayFab onClick={onPlayClick} />}
        <NextFab onClick={onNextClick} />
      </MuiStack>
    </section>
  );
}

function useCarousel(people: Person[]) {
  const playIntervalRef = useRef<number>(-1);
  const carouselState = useSelector(selectPlayStatus);
  const currentPerson = useSelector(selectCurrentPerson);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carouselActions.updatePeople(people));
  }, [people, dispatch]);

  useEffect(() => {
    if (carouselState === 'PLAY') {
      playIntervalRef.current = window.setInterval(() => dispatch(carouselActions.next()), 2_000);
      return () => clearInterval(playIntervalRef.current);
    } else {
      clearInterval(playIntervalRef.current);
    }
  }, [carouselState, dispatch]);

  return {
    currentPerson,
    carouselState,
    onPreviousClick: () => dispatch(carouselActions.previous()),
    onNextClick: () => dispatch(carouselActions.next()),
    onPlayClick: () => dispatch(carouselActions.play()),
    onPauseClick: () => dispatch(carouselActions.pause()),
  };
}
