import { useReducer } from "react";
import { createContext } from "react";
import { PersonModel } from "../api/person";

export const PeopleContext = createContext(null);
export const PeopleDispatchContext = createContext(null);

interface childrenProps {
  children: JSX.Element;
}

export function PeopleProvider({ children }: childrenProps) {
  const [people, dispatch] = useReducer(peopleReducer, [])
  return (
    <PeopleContext.Provider value={people} >
      <PeopleDispatchContext.Provider value={dispatch}>
        {children}
      </PeopleDispatchContext.Provider>
    </PeopleContext.Provider>
  )
}

function peopleReducer(people: PeopleState, action: PeopleAction) {
  // TODO : Add, Remove, Update, Set Data
  switch (action.type) {
    default: {
      return [...people];
    }
  }
}

enum PeopleActionKind {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  REMOVE = 'REMOVE'
}

interface PeopleAction {
  type: PeopleActionKind;
  person: PersonModel;
}

type PeopleState = PersonModel[] | null
