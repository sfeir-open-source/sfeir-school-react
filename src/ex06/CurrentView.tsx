import {Loading} from "../solution/Loading";
import {Carousel} from "../ex03/Carousel";
import React from "react";
import {PersonCard} from "../ex02/PersonCard";

type CurrentViewProps = {
  people: People;
  showList: boolean;
};

export const CurrentView: React.FC<CurrentViewProps> = ({people, showList}) => {
  const list = people.map(person => <PersonCard key={person.id} person={person} />);
  const carousel = <Carousel people={people} />;
  const view = showList ? list : carousel;

  return (
      <>
        {people.length === 0 ? <Loading/> : view}
      </>
  );
};