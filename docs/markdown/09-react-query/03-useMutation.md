<!-- .slide: class="with-code" -->

# useMutation

```javascript
const Todos = () => {
  const { data, isLoading } = useQuery("todos", fetchTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div>
      <ul>
        {data.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
```
