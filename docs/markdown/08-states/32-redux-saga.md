<!-- .slide: class="transition bg-pink" -->

# Redux Thunk

##==##

# Redux Saga

![center](./assets/images/redux-saga.png)

##==##

<!-- .slide: class="with-code" -->

# Setup Saga

<!-- prettier-ignore -->
```typescript [1,5|3|8-9|12]
import createSagaMiddleware from 'redux-saga';

import appSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(appSaga);
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Dispatch some actions

<!-- prettier-ignore -->
```typescript []
function TodoList() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(navigateTo('/')), []);
    return <>
        <Todo onRemoveClick={(id) => dispatch(todosSlice.remove(id))}>
        <button onClick={() => dispatch(todosSlice.add())}>Add</button>
    </>
}

```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Create a saga

<!-- prettier-ignore -->
```typescript [13,17|14-16|14|3-11|6|5,7,9]
import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchTodos(action) {
   try {
      yield put({ type: 'loadTodos/fetching' });    
      const todos = yield call(Api.fetchTodos);
      yield put({ type: 'loadTodos/successful', todos });    
   } catch (e) {
      yield put({type: "loadTodos/failed", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery(navigateTo.type, fetchTodos);
  yield takeEvery(todosSlice.add.type, /* ... */);
  yield takeEvery(todosSlice.remove.type, /* ... */);
}
```

<!-- .element: class="big-code" -->
