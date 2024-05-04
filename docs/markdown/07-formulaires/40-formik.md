<!-- .slide: class="transition" -->

# Formik

##==##

![center](./assets/images/formik.png)

[https://formik.org/](https://formik.org/)

##==##

![center](./assets/images/formik.png)

[https://formik.org/](https://formik.org/) (Little secret: it use react-hook-form under to hood 🤫)

##==##

<!-- .slide: class="with-code" -->

# Before Formik

```TypeScript
type MyFormValues = { firstname: string; lastname: string; }
type MyFormProps = { initialValue?: Partial<MyFormValues>, onSubmit: (state: MyFormValues) => void }
```

<!-- .element: class="big-code" -->

```TypeScript
function MyForm({ initialValue = {}, onSubmit }: MyFormProps) {
    const [values, setValues] = useState<MyFormValues>({ firstname: '', lastname: '', ...initialValue });
    const handleChange = (name: string) => (newValue: string) => {
        setValues({ ...values, [name]: newValue });
    }
    return <form onSubmit={() => onSubmit(values)}>
        <input name="firstname" defaultValue={values.firstname} onChange={handleChange('firstname')} />;
        <input name="lastname" defaultValue={values.lastname} onChange={handleChange('lastname')} />;
        <button type="submit">Save</button>
    </form>
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# With Formik

```TypeScript [1|3,12|5,10|6|7,8|4,9,11|]
import { Formik, Form, Field, ErrorMessage } from 'formik';
function MyForm({ initialValue = {}, onSubmit }: MyFormProps) {
    return <Formik initialValues={initialValue} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
         <Form>
           <Field name="firstname" as="input" />
           <Field name="firstname" required />
           <ErrorMessage name="firstname" component="div" />
           <button type="submit" disabled={isSubmitting}>Save</button>
         </Form>
       )}
    </Formik>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Get the values

```TypeScript [4,6]
import { Formik, Form, Field, ErrorMessage } from 'formik';
function MyForm({ initialValue = {}, onSubmit }: MyFormProps) {
    return <Formik initialValues={initialValue} onSubmit={onSubmit}>
        {({ isSubmitting, values }) => (
         <Form>
           <pre>{JSON.stringify(values)}</pre>
           <Field name="firstname" as="input" />
           <Field name="firstname" required />
           <ErrorMessage name="firstname" component="div" />
           <button type="submit" disabled={isSubmitting}>Save</button>
         </Form>
       )}
    </Formik>;
}
```

<!-- .element: class="big-code" -->
