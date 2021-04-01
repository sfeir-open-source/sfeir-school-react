import React, {useEffect, useState} from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";

import { Player } from "./Player";
import {loadPeople} from "../utils";
// import { Player } from "../solution/Player";

export const App: React.FC = () => {
  const [showList, setShowList] = useState(true);
  const toggleView = () => setShowList((x) => !x);
  const toggleIcon = showList ? "view_carousel" : "view_module";

  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  const CurrentView: React.ComponentType<{ people: People }> =
    people.length === 0 ? Loading : showList ? SearchableList : Player;

  return (
    <>
      <Header>
        <TopAppBarActionItem icon={toggleIcon} onClick={toggleView} />
      </Header>
      <CurrentView people={people} />
    </>
  );
};
