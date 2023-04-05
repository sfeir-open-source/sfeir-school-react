<!-- .slide: class="with-code" -->

# forms in React docs

```javascript
const MyForm = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event) => setValue(event.target.value);

  return <input value={value} onChange={handleChange} />;
};
```
