import React, { useEffect, useState } from "react";
import { loadPeople } from "../utils";

type PeopleCtx = {
  people: People;
  isLoading: boolean;
  refetch: () => void;
};

export const PeopleContext = React.createContext<PeopleCtx>({
  isLoading: false,
  refetch: () => {},
  people: [
    {
      id: "5763cd4dba6362a3f92c954e",
      photo: "https://randomuser.me/portraits/women/24.jpg",
      firstname: "Phyllis",
      lastname: "Donovan",
      position: "Developer",
      // entryDate: "30/03/2015",
      // birthDate: "30/11/1951",
      // gender: "f",
      email: "donovan.p@acme.com",
      phone: "0685230125",
      // isManager: false,
      manager: "Erika",
      managerId: "5763cd4d3b57c672861bfa1f",
    },
  ],
});

// change this component to implement the loading logic
// and provide the loaded people array to all its
// descendants
export const PeopleProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState<People>([]);

  const [lastFetch, setLastFetch] = useState(new Date().toISOString());
  const refetch = () => {
    setLastFetch(new Date().toISOString());
    setPeople([]);
    setIsLoading(true);
  };

  useEffect(() => {
    loadPeople()
      .then(setPeople)
      .finally(() => setIsLoading(false));
  }, [lastFetch]);

  return (
    <PeopleContext.Provider value={{ people, isLoading, refetch }}>
      {children}
    </PeopleContext.Provider>
  );
};
