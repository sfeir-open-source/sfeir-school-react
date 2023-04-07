import React, { useState, useEffect, createContext } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { loadPeople, loadPerson } from "../utils";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useMatch,
} from "react-router-dom";
import { Person } from "./Person";

const ElementTest = () => {
  return <div>Element test</div>;
};
export const App: React.FC = () => {
  //const showList = match.path === "/list";
  //const [ setShowList] = useState(true);
  //const toggleView = () => setShowList((x) => !x);
  //const toggleIcon = showList ? "view_carousel" : "view_module";

  const [people, setPeople] = useState<People>([]);
  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  const showLoader = people.length === 0;

  // const CurrentView: React.ComponentType<{ people: People }> =
  //   people.length === 0 ? Loading : showList ? SearchableList : Player;

  function SuperNavItem() {
    const match = useMatch("/list");
    const showList = match !== null;
    return (
      <NavLink to={showList ? "/player" : "/list"}>
        <TopAppBarActionItem
          icon={showList ? "view_carousel" : "view_module"}
        />
      </NavLink>
    );
  }
  return (
    <>
      <Header>
        <SuperNavItem />
        {/*
        <NavLink to="/player">
          <TopAppBarActionItem icon="view_carousel" />
        </NavLink> */}
      </Header>

      {showLoader ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/list" />} />
          <Route path="/list" element={<SearchableList people={people} />} />
          <Route path="/player" element={<Player people={people} />} />
          <Route path="/person/:id" element={<Person people={people} />} />
          <Route path="/test/*" element={<ElementTest />} />

          {/* <Redirect to="/list" /> */}
        </Routes>
      )}
    </>
  );
};
