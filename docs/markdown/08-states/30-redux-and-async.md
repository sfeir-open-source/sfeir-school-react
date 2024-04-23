<!-- .slide: class="transition bg-pink" -->

# Redux & Async

##==##

# Redux is synchronous

![center](./assets/images/redux_one-way-data-flow.png)

##==##

<!-- .slide: class="with-code" -->

# In the components?

```typescript
const todosFetched = createAction<Todo[]>('todosFetched');

function MyTodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(/* ... */).then((todos) => {
      dispatch(todosFetched(todos));
      return todos;
    });
  });
}
```

<!-- .element: class="big-code" -->

##==##

# Near Redux?

![center h-850](./assets/images/redux_dataFlowDiagram.gif)

##==##

# Middlewares

##==##

# Middlewares

- Redux Thunk (Promise based)

##==##

# Middlewares

- Redux Thunk (Promise based)
- Redux Saga (Generator based)

##==##

# Middlewares

- Redux Thunk (Promise based)
- Redux Saga (Generator based)
- Redux Observable (RxJS Observable based)

##==##

# Middlewares

- Redux Thunk (Promise based)
- Redux Saga (Generator based)
- Redux Observable (RxJS Observable based)
- a lot more...
