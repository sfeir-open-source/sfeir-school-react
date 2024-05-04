<!-- .slide: class="transition" -->

# Redux Thunk

##==##

<!-- .slide: class="with-code" -->

# Create a thunk

```typescript
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchTodos = createAsyncThunk('todos/fetch', async () => {
  const response = await fetch('/todos');
  return response.data;
});

// somewhere else
dispatch(fetchTodos());
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Create a thunk with parameter

<!-- prettier-ignore -->
```typescript [3-5]
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchTodosById = createAsyncThunk('todos/fetchById', 
    async (todoId: number) => {
    const response = await fetch('/todos/' + todoId);
    return response.data;
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Create a thunk that use the state

<!-- prettier-ignore -->
```typescript [3-5]
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchTodosById = createAsyncThunk('todos/fetchById', 
    async (_, thunkApi) => {
    const response = await fetch('/todos/' + thunkApi.getState().todos[0].id);
    return response.data;
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Reduce the thunk

```typescript [7,13|8,12|9-11|7-13]
export const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] } as TodosReducerState,
  reducers: {
    /* ... */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = 'idle';
      });
  },
});
```

<!-- .element: class="big-code" -->
