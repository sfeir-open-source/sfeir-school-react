import React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../Header";
import { SearchableList } from "../SearchableList";
import { Player } from "../Player";
import { Loading } from "../Loading";
import { Person } from "../EditablePerson";
import { usePeople } from "./usePeople";

const ContextualList: React.FC = () => {
  const { people } = usePeople();
  return <SearchableList people={people} />;
};

const ContextualPlayer: React.FC = () => {
  const { people } = usePeople();
  return people && <Player people={people} />;
};

const ContextualPerson: React.FC<RouteComponentProps<{
  id: string;
}>> = ({ match }) => {
  const { people, updatePerson } = usePeople();
  const person = people.find((p) => p.id === match.params.id);
  return <Person person={person} onUpdate={updatePerson} />;
};

export const App: React.FC = () => {
  const { isLoading } = usePeople();

  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {isLoading ? (
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
