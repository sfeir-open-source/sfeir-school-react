import { PropsWithChildren, useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getPeople, PersonModel } from "../api/person";

interface PeopleContextTypes {
  people: PersonModel[],
  dispatch: React.Dispatch<Action>
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const PeopleContext = createContext<PeopleContextTypes>({ people: [], dispatch: () => { } });

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

export function PeopleProvider({ children }: PropsWithChildren<unknown>) {
  const [people, dispatch] = useReducer(peopleReducer, [] as PersonModel[]);

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
  const type = action.type
  switch (action.type) {
    case PeopleActionKind.ADD: {
      return [...people, ...action.people]
    }
    case PeopleActionKind.UPDATE: {
      return people.map(person => person.id === action.person.id ? action.person : person)
    }
    case PeopleActionKind.REMOVE: {
      return people.filter(person => person.id !== action.person.id)
    }
    case PeopleActionKind.INIT: return action.people
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}

// Utils
export function usePeople() {
  return useContext(PeopleContext);
}

export function usePeopleContext() {
  return usePeople().people;
}

export function usePeopleDispatch() {
  return usePeople().dispatch;
}
