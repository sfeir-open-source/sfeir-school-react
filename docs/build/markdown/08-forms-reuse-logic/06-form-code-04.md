<!-- .slide: class="with-code" -->

# forms in React docs

```javascript
const MyForm = ({ initialValue }) => {
  const [values, setValues] = useState(initialValue);
  const handleChange = (event) =>
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

  return (
    <>
      <input name="firstname" value={values.firstname} onChange={handleChange} />
      <input name="lastname" value={values.lastname} onChange={handleChange} />
    </>
  );
};
```
