import React, { useState } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Loading } from "../solution/Loading";
import { Person } from "../solution/EditablePerson";

import { usePeople } from "./usePeople";

const ContextualList: React.FC = () => {
  const { people } = usePeople();
  return <SearchableList people={people} />;
};

const ContextualPlayer: React.FC = () => {
  const { people } = usePeople();
  return people && <Player people={people} />;
};

const ContextualPerson: React.FC<
  RouteComponentProps<{
    id: string;
  }>
> = ({ match }) => {
  const { getPersonById, isLoading, updatePerson } = usePeople();
  const person = getPersonById(match.params.id);

  const [myKey, setMyKey] = useState(0);
  if (isLoading) return <Loading />;
  return (
    <>
      <Person key={myKey} person={person} onUpdate={updatePerson} />
      <button onClick={() => setMyKey(myKey + 1)}>Refresh</button>
    </>
  );
};

export const App: React.FC = () => {
  // TODO: implement usePeople to load & store people
  /*
  const { value: isLoading, setState: setIsLoading } = useObjectState();
  const [isLoading, setIsLoading] = useState();


  const { value: currentIndex, setState: setCurrentIndex } = useObjectState();
  const [currentIndex, setCurrentIndex] = useState();
*/

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
