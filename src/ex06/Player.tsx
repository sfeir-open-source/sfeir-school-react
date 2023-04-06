import React, { useState, cloneElement, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";

type CarouselProps = {
  currentIndex: number;
  goNext: () => void;
  goPrev: () => void;
  children: React.ReactElement[];
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  currentIndex,
  goNext,
  goPrev,
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
      <Fab icon="skip_previous" mini onClick={goPrev} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={goNext} />
    </div>
  );
};

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { succ, pred } = range(0, people.length - 1);
  const goNext = () => {
    setCurrentIndex(succ);
  };
  const goPrev = () => setCurrentIndex(pred);

  // Method 1: With timeout
  useEffect(() => {
    //console.log("effect");
    if (isPlaying) {
      //console.log("isplaying, setTimeout");
      const timeoutId = setTimeout(goNext, 2000);
      return () => {
        //console.log("clearTimeout");
        clearTimeout(timeoutId);
      };
    }
  }, [isPlaying, currentIndex]);

  // Method 2: with Interval
  // useEffect(() => {
  //   console.log("in effect");
  //   if (isPlaying) {
  //     console.log("setInterval");
  //     goNext();
  //     const iid = setInterval(goNext, 2000);
  //     return () => clearInterval(iid);
  //   }
  // }, [isPlaying]);
  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} goNext={goNext} goPrev={goPrev}>
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
