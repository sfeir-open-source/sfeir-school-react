import React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Loading } from "../solution/Loading";
import { Person } from "../solution/EditablePerson";

import { usePeople } from "./usePeople";

const ContextualList: React.FC = () => {
  const people = [];
  return <SearchableList people={people} />;
};

const ContextualPlayer: React.FC = () => {
  const people = [];
  return <Player people={people} />;
};

const ContextualPerson: React.FC<RouteComponentProps<{
  id: string;
}>> = ({ match }) => {
  const people = [];
  const person = people.find((p) => p.id === match.params.id);

  // TODO: call mutateAsync function from useMutation
  const onUpdate = (updated: Person) => {
    console.log("updated person:", updated);
    return Promise.resolve();
  }
  return <Person person={person} onUpdate={onUpdate} />;
};

export const App: React.FC = () => {
  // TODO: implement usePeople to load & store people
  const people = [];
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {people.length === 0 ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/list" component={ContextualList} />
          <Route path="/player" component={ContextualPlayer} />
          <Route path="/person/:id" component={ContextualPerson} />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
