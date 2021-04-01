import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { loadPeople } from "../utils";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import { PersonCard } from "../solution/PersonCard";

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
              <Route path="/list" render={() => <SearchableList people={people} />} />
              <Route path="/player" render={() => <Player people={people} />} />

              <Route path="/person/:personId" render={
                ({ match: { params } }) => {
                  const person = people.find(person => person.id === params.personId);

                  return (
                      <main>
                        <PersonCard person={person} />
                      </main>
                  )
                }
              }/>
              <Redirect to="/list" />
            </Switch>
        )
      }
    </>
  );
};
