import { Image } from "../../../dto";

export enum ACTIONS {
  INITIALIZED,
  PREVIOUS,
  NEXT,
  GOTO,
}

type PreviousAction = {
  type: typeof ACTIONS.PREVIOUS;
};
export function previous(): PreviousAction {
  return {
    type: ACTIONS.PREVIOUS,
  };
}

type NextAction = {
  type: typeof ACTIONS.NEXT;
};

export function next(): NextAction {
  return {
    type: ACTIONS.NEXT,
  };
}

type GotoAction = {
  type: typeof ACTIONS.GOTO;
  selected: Image;
};

export function goto(selected: Image): GotoAction {
  return {
    type: ACTIONS.GOTO,
    selected,
  };
}

type InitializedAction = {
  type: typeof ACTIONS.INITIALIZED;
  images: Image[];
};

export function initialized(images: Image[]): InitializedAction {
  return {
    type: ACTIONS.INITIALIZED,
    images,
  };
}

export type Action =
  | PreviousAction
  | NextAction
  | GotoAction
  | InitializedAction;
