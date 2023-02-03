<!-- .slide: class="with-code" -->

# useQuery

```javascript
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Todos />
  </QueryClientProvider>;
);

const Todos = () => {
  const { data, isLoading } = useQuery("todos", fetchTodos);

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
```
