import { ArrowBack, ArrowForward, Pause, PlayArrow } from '@mui/icons-material';
import MuiFab from '@mui/material/Fab';
import MuiStack from '@mui/material/Stack';
import { PersonCard } from './PersonCard';
import React, { useCallback, useEffect, useRef, useState } from 'react';

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
      <ActionButton Icon={ArrowBack} label="previous" onClick={onPreviousClick} />
      <PersonCard person={currentPerson} />
      <MuiStack spacing={1}>
        {carouselState === 'PLAY' ? (
          <ActionButton Icon={Pause} label="pause" onClick={() => setCarouselState('PAUSE')} />
        ) : (
          <ActionButton Icon={PlayArrow} label="play" onClick={() => setCarouselState('PLAY')} />
        )}
        <ActionButton Icon={ArrowForward} label="next" onClick={onNextClick} />
      </MuiStack>
    </section>
  );
}

interface ActionButtonProps {
  label: string;
  Icon: React.ComponentType;
  onClick: VoidFunction;
}

function ActionButton({ label, onClick, Icon }: ActionButtonProps) {
  return (
    <MuiFab size="small" color="default" aria-label={label} onClick={onClick}>
      <Icon />
    </MuiFab>
  );
}
