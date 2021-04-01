import React, {useEffect, useState} from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import {loadPeople} from "../utils";
import {CurrentView} from "./CurrentView";

export const App: React.FC = () => {
  const [showList, setShowList] = useState(true);
  const toggleView = () => setShowList((x) => !x);
  const toggleIcon = showList ? "view_carousel" : "view_module";

  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  return (
    <>
      <Header>
        <TopAppBarActionItem icon={toggleIcon} onClick={toggleView} />
      </Header>
      <CurrentView people={people} showList={showList} />
    </>
  );
};
