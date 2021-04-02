import React, { createContext, useState, useEffect } from "react";
import { loadPeople } from "../utils";

type PeopleContextProps = {
  people: People;
  updatePerson: (updatedPerson: Person) => void;
}

export const PeopleContext = createContext<PeopleContextProps>({
  people: [],
  updatePerson: updatedPerson => {}
});

export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<People>([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  const updatePerson = (updatedPerson: Person) => {
    setPeople(
        people.map(person => {
          if (person.id === updatedPerson.id) {
            return updatedPerson;
          }
          return person;
        })
    )
  };

  const context = {
    people,
    updatePerson
  };

  return (
    <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>
  );
};
