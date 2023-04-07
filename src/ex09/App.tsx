import React, { useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useMatches,
  useMatch,
} from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Loading } from "../solution/Loading";

import { Person } from "./EditablePerson";
import { PeopleContext } from "./PeopleContext";

const ContextualList: React.FC = () => {
  const people = useContext(PeopleContext);
  return <SearchableList people={people} />;
};

const ContextualPlayer: React.FC = () => {
  const people = useContext(PeopleContext);
  return <Player people={people} />;
};

const ContextualPerson: React.FC = () => {
  const params = useParams();
  const people = useContext(PeopleContext);
  const person = people.find((p) => p.id === params.id);
  const manager = useMatch("/managers/*");
  console.log(manager, person);
  if (manager != null && !person.isManager)
    return <>This person is not a manager</>;
  return <Person person={person} />;
};

export const App: React.FC = () => {
  const people = useContext(PeopleContext);
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {people.length === 0 ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/list" element={<ContextualList />} />
          <Route path="/player" element={<ContextualPlayer />} />
          <Route path="/person/:id/*" element={<ContextualPerson />} />
          <Route path="/managers">
            <Route path=":id/*" element={<ContextualPerson />} />
          </Route>
          <Route path="*" element={<Navigate to="/list" />} />
        </Routes>
      )}
    </>
  );
};
