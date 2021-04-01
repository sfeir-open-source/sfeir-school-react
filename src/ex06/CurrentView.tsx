import {Loading} from "../solution/Loading";
import {SearchableList} from "../solution/SearchableList";
import {Player} from "./Player";
import React from "react";

type CurrentViewProps = {
  people: People;
  showList: boolean;
};

export const CurrentView: React.FC<CurrentViewProps> = ({people, showList}) => {
  const view = showList ? <SearchableList people={people}/> : <Player people={people} />;

  return (
      <>
        {people.length === 0 ? <Loading/> : view}
      </>
  );
};