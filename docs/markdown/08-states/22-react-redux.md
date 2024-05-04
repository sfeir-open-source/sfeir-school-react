<!-- .slide: class="transition" -->

# React-Redux

##==##

<!-- .slide: class="with-code" -->

# React-Redux - Provide the store

<!-- prettier-ignore -->
```typescript [2-3,7,9]
// src/main.tsx
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  </React.StrictMode>
);
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# React-Redux - Dispatch actions

<!-- prettier-ignore -->
```typescript
import { useDispatch } from 'react-redux'

function MyComponent() {
    const dispatch = useDispatch();

    dispatch(todosAction.add('And with React-Redux?'));
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# React-Redux - Read the store

<!-- prettier-ignore -->
```typescript [1|3,8|4,9|5,10|]
import { useSelector } from 'react-redux'

const selectTodos = (state: RootState) => state.todos.todos;
const selectLastTodo = (state: RootState) => state.todos.todos[state.todos.todos.length - 1];
const selectOneTodo = (id: number) => (state: RootState) => state.todos.todos[id];

function MyComponent() {
  const todos = useSelector(selectTodos);
  const lastTodo = useSelector(selectLastTodo);
  const firstTodo = useSelector(selectOneTodo(0));

  // ...
}
```

<!-- .element: class="big-code" -->
