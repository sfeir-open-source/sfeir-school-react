import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { PersonModel } from "../api/person";

interface PeopleContextTypes {
  people: PersonModel[],
  dispatch: React.Dispatch<PeopleAction> | null
}

export const PeopleContext = createContext<PeopleContextTypes>({ people: [], dispatch: null });

interface childrenProps {
  children: JSX.Element;
}

export function PeopleProvider({ children }: childrenProps) {
  const [people, dispatch] = useReducer(peopleReducer, [] as PersonModel[])
  return (
    <PeopleContext.Provider value={{ people, dispatch }} >
      {children}
    </PeopleContext.Provider>
  )
}

type PeopleState = PersonModel[]
enum PeopleActionKind {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  REMOVE = 'REMOVE'
}
interface PeopleAction {
  type: PeopleActionKind;
  person: PersonModel;
}

function peopleReducer(people: PeopleState, action: PeopleAction) {
  // TODO : Add, Remove, Update, Set Data
  switch (action.type) {
    case PeopleActionKind.ADD:
    case PeopleActionKind.UPDATE: {
      return [...people, action.person]
    }
    case PeopleActionKind.REMOVE: {
      return [...people.filter(person => person.id !== action.person.id)]
    }
    default: {
      return [...people];
    }
  }
}

// Utils
export function usePeople() {
  return useContext(PeopleContext).people;
}

export function usePeopleDispatch() {
  return useContext(PeopleContext).dispatch;
}
