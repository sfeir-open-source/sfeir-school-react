import React, {useState, useMemo, useContext} from "react";
import { PersonCard } from "../solution/PersonCard";

import { PersonForm } from "./PersonForm";
import {savePerson} from "../utils";
import {PeopleContext} from "./PeopleContext";

type PersonProps = {
  person?: Person;
};

export const Person: React.FC<PersonProps> = ({ person }) => {
  const {updatePerson} = useContext(PeopleContext);
  const [editing, setEditing] = useState(false);
  const actions = useMemo(
    () => [{ label: "edit", onClick: () => setEditing(true) }],
    []
  );

  const onSubmit = (newPerson: Person) => {
    savePerson(newPerson)
      .then(updatedPerson => updatePerson(updatedPerson))
      .finally(() => {
        setEditing(false);
      });
  };

  const card = editing ? (
    <PersonForm person={person} onSubmit={onSubmit} />
  ) : (
    <PersonCard person={person} actions={actions} />
  );

  return <main>{person ? card : "404 - this person could not be found"}</main>;
};
