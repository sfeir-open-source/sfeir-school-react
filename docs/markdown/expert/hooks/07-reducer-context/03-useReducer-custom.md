# UseReducer, with custom Hook

```javascript
const INITIAL_VALUE = {};
function reducer (state, action) {
    // return nextState;
}

export default function useMyCustomReducer() {
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);

    const doSomething = useCallback((args) => {
        dispatch("DO_SOMETHING", args)
    }, [])

    return {
        state,
        doSomething
    }
}
```