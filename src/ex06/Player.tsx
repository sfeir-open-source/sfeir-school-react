import React, { useState, cloneElement, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";

type CarouselProps = {
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactElement[];
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  currentIndex,
  onNext,
  onPrev,
}) => {
  const childArray = React.Children.toArray(children) as React.ReactElement[];
  const { pred, succ } = range(0, childArray.length - 1);

  const cards: [number, string][] = [
    [succ(currentIndex), "next"],
    [currentIndex, "current"],
    [pred(currentIndex), "prev"],
  ];

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={onPrev} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={onNext} />
    </div>
  );
};

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pred, succ } = range(0, people.length - 1);

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      const iid = setInterval(() => setCurrentIndex(succ), 2000);
      return () => clearInterval(iid);
    }
  }, [isPlaying]);

  return (
    <>
      <main>
        <Carousel
          currentIndex={currentIndex}
          onNext={() => setCurrentIndex(succ)}
          onPrev={() => setCurrentIndex(pred)}
        >
          {people.map((person) => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        <Fab
          icon={isPlaying ? "pause" : "play_arrow"}
          onClick={() => setIsPlaying(!isPlaying)}
        />
        {/* show the pause icon when playing */}
      </footer>
    </>
  );
};
