<!-- .slide: class="transition" -->

# Redux

##==##

# Flow Pattern

![center](./assets/images/redux_one-way-data-flow.png)

##==##

# Flow Pattern

![center h-850](./assets/images/redux_dataFlowDiagram.gif)

##==##

<!-- .slide: class="with-code" -->

# Create a store

```typescript
// src/store/index.ts
import { combineReducers, createStore } from 'redux';
import { todosReducer } from './todos';

const rootReducer = combineReducers({ todos: todosReducer });
export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Create the todosReducer

```typescript [8-10|3-6|12-16|18|19|20-21|22-23|24-34|35-44|46]
// src/store/todos-reducer.ts

interface Todo {
  text: string;
  done: boolean;
}

interface TodosReducerState {
  todos: Todo[];
}

type TodosReducerActions =
  | { type: 'ADD'; text: string }
  | { type: 'REMOVE'; id: number }
  | { type: 'UPDATE'; id: number; text: string }
  | { type: 'DONE'; id: number };

export function todosReducer(state: TodosReducerState, action: TodosReducerActions): TodosReducerState {
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [...state.todos, { text: action.text, done: false }] };
    case 'REMOVE':
      return { ...state, todos: state.todos.filter((_, index) => index === action.id) };
    case 'UPDATE':
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.id) {
            return { ...todo, text: action.text };
          } else {
            return todo;
          }
        }),
      };
    case 'DONE':
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.id) {
            return { ...todo, done: true };
          }
          return todo;
        }),
      };
  }
  return state;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Dispatch an action

```typescript
store.dispatch({ type: 'ADD', text: 'Try to use Redux...' });
```

<!-- .element: class="big-code" -->
