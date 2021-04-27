# UseContext & custom reducer together

```javascript
const MyContext = React.createContext();

// Context Provider
function App() {
    const myReducer = useMyCustomReducer();
    return (
        <MyContext.Provider value={myReducer}>
            <MyComponent />
        </MyContext.Provider>
    );
}
```

```javascript
// To read reducer values in any child of App
const { state, doSomething } = useContext(MyContext);
```