# UseContext

```javascript
const MyContext = React.createContext();

// Context Provider
function App() {
    return (
        <MyContext.Provider value={value}> // To push value
            <MyComponent />
        </MyContext.Provider>
    );
}
```

```javascript
// To read context value in any child of App
const value = useContext(MyContext);
```