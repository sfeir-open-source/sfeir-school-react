import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getPeople, PersonModel } from "../api/person";


interface PeopleContextTypes {
  people: PersonModel[],
  dispatch: React.Dispatch<Action>
}

export const PeopleContext = createContext<PeopleContextTypes>({} as PeopleContextTypes);

interface childrenProps {
  children: JSX.Element[] | JSX.Element;
}

type PeopleState = PersonModel[]
export enum PeopleActionKind {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  REMOVE = 'REMOVE',
  INIT = 'INIT'
}
interface PeopleAction { type: PeopleActionKind.ADD | PeopleActionKind.INIT, people: PersonModel[]; }
interface PersonAction { type: PeopleActionKind.UPDATE | PeopleActionKind.REMOVE, person: PersonModel; }
type Action = PeopleAction | PersonAction

export function PeopleProvider({ children }: childrenProps) {
  const [people, dispatch] = useReducer(peopleReducer, [] as PersonModel[])

  useEffect(() => {
    getPeople().then((people) => dispatch({ type: PeopleActionKind.INIT, people }));
  }, [])

  return (
    <PeopleContext.Provider value={{ people, dispatch }} >
      {children}
    </PeopleContext.Provider>
  )
}

function peopleReducer(people: PeopleState, action: Action): PeopleState {
  switch (action.type) {
    case PeopleActionKind.ADD: {
      return [...people, ...action.people]
    }
    case PeopleActionKind.UPDATE: {
      return [...people, action.person]
    }
    case PeopleActionKind.REMOVE: {
      return people.filter(person => person.id !== action.person.id)
    }
    case PeopleActionKind.INIT: return action.people
    default: {
      return [...people];
    }
  }
}

// Utils
export function usePeopleContext() {
  return useContext(PeopleContext).people;
}

export function usePeopleDispatch() {
  return useContext(PeopleContext).dispatch;
}
