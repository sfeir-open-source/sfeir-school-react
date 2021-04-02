import React, {useState, useMemo} from "react";
import { PersonCard } from "../solution/PersonCard";

import { PersonForm } from "./PersonForm";
import {savePerson} from "../utils";
import {usePeople} from "./usePeople";
import {useQueryClient} from "react-query";

type PersonProps = {
  person?: Person;
};

export const Person: React.FC<PersonProps> = ({ person }) => {
  const { people } = usePeople();
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState(false);
  const actions = useMemo(
    () => [{ label: "edit", onClick: () => setEditing(true) }],
    []
  );

  const onSubmit = (newPerson: Person) => {
    savePerson(newPerson)
      .then(responsePerson => {
        queryClient.setQueryData("people", people.map(person => {
          if (responsePerson.id === person.id) {
            return responsePerson;
          }
          return person;
        }))
      })
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
