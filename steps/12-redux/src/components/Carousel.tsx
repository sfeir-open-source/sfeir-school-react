import { ArrowBack, ArrowForward, Pause, PlayArrow } from '@mui/icons-material';
import MuiStack from '@mui/material/Stack';
import { PersonCard } from './PersonCard';
import { useEffect, useReducer, useRef } from 'react';
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
      {currentPerson && <PersonCard person={currentPerson} />}
      <MuiStack spacing={1}>
        {carouselState === 'PLAY' ? <PauseFab onClick={onPauseClick} /> : <PlayFab onClick={onPlayClick} />}
        <NextFab onClick={onNextClick} />
      </MuiStack>
    </section>
  );
}

type CarouselState = 'PLAY' | 'PAUSE';

interface CarouselReducerState {
  people: Person[];
  currentIndex: number;
  currentPerson: Person | undefined;
  playState: CarouselState;
}

type CarouselReducerAction = { type: 'PLAY' } | { type: 'PAUSE' } | { type: 'PREVIOUS' } | { type: 'NEXT' };

function carouselReducer(state: CarouselReducerState, action: CarouselReducerAction): CarouselReducerState {
  switch (action.type) {
    case 'PREVIOUS': {
      const currentIndex = state.currentIndex === 0 ? state.people.length - 1 : state.currentIndex - 1;
      return { ...state, currentIndex, currentPerson: state.people[currentIndex] };
    }
    case 'NEXT': {
      const currentIndex = state.currentIndex === state.people.length - 1 ? 0 : state.currentIndex + 1;
      return { ...state, currentIndex, currentPerson: state.people[currentIndex] };
    }
    case 'PLAY':
      return { ...state, playState: 'PLAY' };
    case 'PAUSE':
      return { ...state, playState: 'PAUSE' };
    default:
      return state;
  }
}

function useCarousel(people: Person[]) {
  const [state, dispatch] = useReducer(carouselReducer, {
    people,
    currentIndex: 0,
    currentPerson: people[0],
    playState: 'PLAY',
  });
  const playIntervalRef = useRef<number>(-1);

  useEffect(() => {
    if (state.playState === 'PLAY') {
      playIntervalRef.current = setInterval(() => dispatch({ type: 'NEXT' }), 2_000);
      return () => {
        clearInterval(playIntervalRef.current);
        playIntervalRef.current = -1;
      };
    } else if (playIntervalRef.current != -1) {
      clearInterval(playIntervalRef.current);
    }
  }, [state.playState, playIntervalRef, dispatch]);

  return {
    currentPerson: state.currentPerson,
    carouselState: state.playState,
    onPreviousClick: () => dispatch({ type: 'PREVIOUS' }),
    onNextClick: () => dispatch({ type: 'NEXT' }),
    onPlayClick: () => dispatch({ type: 'PLAY' }),
    onPauseClick: () => dispatch({ type: 'PAUSE' }),
  };
}
