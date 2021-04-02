import React, {useContext, useEffect, useState} from "react";
import {loadPeople} from "../utils";

export const PeopleContext = React.createContext<People>([]);

export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<People>([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  return (
      <PeopleContext.Provider value={people}>
        {children}
      </PeopleContext.Provider>
  );
};

// Custom hooks

export const useIsPeopleLoading = (): boolean => useContext(PeopleContext).length == 0;

export const usePeople = () => useContext(PeopleContext);

export const usePerson = (id: string) => {
  const people = useContext(PeopleContext);
  return people.find((p) => p.id === id);
};
