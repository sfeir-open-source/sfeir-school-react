import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { loadPeople } from "../utils";
import {NavLink, Redirect, Route, RouteComponentProps, Switch} from "react-router-dom";
import { PersonCard } from "../solution/PersonCard";
import { Person } from "./Person";

export const App: React.FC = () => {
  const [people, setPeople] = useState<People>([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  return (
    <>
      <Header>
        <NavLink to="/player" activeStyle={{ display: "none" }}>
          <TopAppBarActionItem icon="view_carousel" />
        </NavLink>
        <NavLink to="/list" activeStyle={{ display: "none" }}>
          <TopAppBarActionItem icon="view_module" />
        </NavLink>
      </Header>

      {
        people.length === 0 ? <Loading/> : (
            <Switch>
              <Route path="/list">
                <SearchableList people={people} />
              </Route>

              <Route path="/player">
                <Player people={people} />
              </Route>

              <Route path="/person/:personId">
                <Person people={people} />
              </Route>

              <Redirect to="/list" />
            </Switch>
        )
      }
    </>
  );
};
