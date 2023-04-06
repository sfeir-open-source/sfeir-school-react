import React, { useState, useEffect, createContext } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { loadPeople } from "../utils";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Person } from "./Person";

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

  function SuperNavItem({ location: { pathname } }) {
    const showList = pathname === "/list";
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
        <Route render={SuperNavItem} />
        {/*
        <NavLink to="/player">
          <TopAppBarActionItem icon="view_carousel" />
        </NavLink> */}
      </Header>

      {showLoader ? (
        <Loading />
      ) : (
        <Switch>
          <Route
            path="/list"
            render={() => <SearchableList people={people} />}
          />
          <Route path="/player" render={() => <Player people={people} />} />
          <Route
            path="/person/:id"
            render={(routeProps) => {
              const person = people.find(
                (p) => p.id === routeProps.match.params.id
              );
              return <Person person={person} />;
            }}
          />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
