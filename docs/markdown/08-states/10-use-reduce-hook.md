<!-- .slide: class="transition bg-pink" -->

# useReducer

##==##

<!-- .slide: class="with-code" -->

# useState

```typescript
function Button() => {
  const [clickCount, setClickCount] = useState<number>(0);

  return <button onClick={() => setClickCount(clickCount+1)}>
        clicked {clickCount} times
    </button>;
};
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# useReducer

```typescript
type ButtonReducerState = { clickCount: number };

function Button() => {
  const [state, dispatch] = useReducer<ButtonReducerState>(reducer, { clickCount: 0 });

  return <button onClick={() => dispatch('CLICK')}>
        clicked {state.clickCount} times
    </button>;
};
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# useReducer

```typescript
function reducer(state: ButtonReducerState, action: 'CLICK') {
  switch (action) {
    case 'CLICK':
      return { ...state, clickCount: state.clickCount + 1 };
    default:
      return state;
  }
}
```

<!-- .element: class="big-code" -->
