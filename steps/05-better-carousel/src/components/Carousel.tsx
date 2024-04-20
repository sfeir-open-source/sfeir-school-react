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
      <ActionButton Icon={ArrowBack} label="previous" onClick={onPreviousClick} />
      <PersonCard person={currentPerson} />
      <MuiStack spacing={1}>
        {carouselState}
        <ActionButton Icon={Pause} label="pause" onClick={() => {}} />
        <ActionButton Icon={PlayArrow} label="play" onClick={() => {}} />
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
