import { useReducer } from "react";
import { createContext } from "react";
import { PersonModel } from "../api/person";

export const PeopleContext = createContext<PersonModel[]>([]);
export const PeopleDispatchContext = createContext<React.Dispatch<PeopleAction> | null>(null);

interface childrenProps {
  children: JSX.Element;
}

export function PeopleProvider({ children }: childrenProps) {
  const [people, dispatch] = useReducer(peopleReducer, [] as PersonModel[])
  return (
    <PeopleContext.Provider value={people} >
      <PeopleDispatchContext.Provider value={dispatch}>
        {children}
      </PeopleDispatchContext.Provider>
    </PeopleContext.Provider>
  )
}
type PeopleState = PersonModel[]
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
