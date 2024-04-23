<!-- .slide: class="transition bg-pink" -->

# Redux Toolkit

##==##

# Redux Toolkit

![center](./assets/images/redux-toolkit.png)

##==##

<!-- .slide: class="with-code" -->

# Create a store

<!-- prettier-ignore -->
```typescript
// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './todos-slice.ts';

export const store = configureStore({  reducer: { 
    todos: todosSlice.reducer,
}});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
store.subscribe(() => {  console.log(store.getState()); });
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Create the todosSlice

```typescript [3-10|12-15|16-18|19-21|22-24|25-27|31-32]
// src/store/todos-slice.ts

interface Todo {
  text: string;
  done: boolean;
}

interface TodosReducerState {
  todos: Todo[];
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.todos.push({ text: action.payload });
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    update: (state, action: PayloadAction<{ id: number; text: string }>) => {
      state.todos[action.payload.id].text = action.payload.text;
    },
    done: (state, action: PayloadAction<number>) => {
      state.todos[action.payload.id].done = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const todosActions = todosSlice.actions;
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Dispatch an action

```typescript
store.dispatch(todosActions.add('Easier with Redux Toolkit!'));
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Actions without slice?

```typescript
export const navigateTo = createAction<string>('navigateTo');
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Extra reducer

```typescript [7,13|8,12|9-11|7-13]
export const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    /* ... */
  },
  extraReducers: (builder) => {
    builder.addCase(navigateTo, (state, action) => {
      if (action.payload === '/logout') {
        state.todos = [];
      }
    });
  },
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Need a unique id?

```typescript
import { nanoid } from '@reduxjs/toolkit';

const defaultSizeId: string = nanoid();
const customSizeId: string = nanoid(10);
```

<!-- .element: class="big-code" -->
