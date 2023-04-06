import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { Loading } from "../solution/Loading";

import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Person } from "../solution/Person";
import {
  PeopleContext,
  PeopleProvider,
  usePeople,
  usePerson,
} from "./PeopleContext";

const ConnectedSearchableList = () => {
  const people = usePeople();
  return <SearchableList people={people} />;
};

const ConnectedPlayer = () => {
  const people = usePeople();
  if (people.length > 0) {
    return <Player people={people} />;
  }
  return null;
};

const ConnectedPerson = ({ match }: RouteComponentProps<{ id: string }>) => {
  const person = usePerson(match.params.id);
  return <Person person={person} />;
};

export const App: React.FC = () => {
  return (
    <>
      <PeopleProvider>
        <Header>
          <HeaderActionItem to="/player" icon="view_carousel" />
          <HeaderActionItem to="/list" icon="view_module" />
        </Header>
        <PeopleContext.Consumer>
          {(people) => {
            if (people.length === 0) return <Loading />;
            else {
              return (
                <Switch>
                  <Route path="/list" component={ConnectedSearchableList} />
                  <Route path="/player" component={ConnectedPlayer} />
                  <Route path="/person/:id" component={ConnectedPerson} />
                  <Redirect to="/list" />
                </Switch>
              );
            }
          }}
        </PeopleContext.Consumer>
      </PeopleProvider>
    </>
  );
};
