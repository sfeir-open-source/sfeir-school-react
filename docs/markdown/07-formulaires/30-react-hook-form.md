<!-- .slide: class="transition" -->

# React Hook Form

##==##

![center](./assets/images/react-hook-form.png)

[https://react-hook-form.com/](https://react-hook-form.com/)

##==##

<!-- .slide: class="with-code" -->

# Before react-hook-form

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

# With react-hook-form

```TypeScript [1|3,4|3,6-7|3,5|3,8|]
import { useForm } from 'react-hook-form';
function MyForm({ initialValue = {}, onSubmit }: MyFormProps) {
    const { register, formState: { errors }, handleSubmit } = useForm<MyFormValues>({
        defaultValues:initialValue });
    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstname")} />;
        <input {...register("lastname", { required: true })} />;
        {errors.lastnameRequired && <span>Lastname field is required</span>}
        <button type="submit">Save</button>
    </form>
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Watch

```TypeScript [4,6-8]
import { useForm, SubmitHandler } from 'react-hook-form';

function MyForm({ initialValue = {}, onSubmit }: MyFormProps) {
    const { register, formState: { errors }, handleSubmit, watch } = useForm<MyFormValues>({
        defaultValues:initialValue });
    const firstname = watch('firstname');
    const values = watch();
    console.log('form values', { firstname, values });
    const onSubmit: SubmitHandler<Inputs> = onSubmit;
    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstname")} />;
        <input {...register("lastname", { required: true })} />;
        {errors.lastnameRequired && <span>Lastname field is required</span>}
        <button type="submit">Save</button>
    </form>
}
```

<!-- .element: class="big-code" -->
