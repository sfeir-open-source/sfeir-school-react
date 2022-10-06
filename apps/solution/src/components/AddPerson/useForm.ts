import { useMemo, useState } from "react";
import { PersonModel } from "../../api/person";

interface IError {
  name: string,
  message: string
}

export default function useForm(initialState: PersonModel, validations: Record<string, (value: string) => boolean | void>) {
  const [values, setValues] = useState<PersonModel>(initialState)
  const [errors, setErrors] = useState<IError[] | []>([])
  const isValid = useMemo(() => errors === undefined, [errors])
  console.log(validations, isValid, errors);

  /**
   * Controls the inputs https://reactjs.org/docs/forms.html#controlled-components
   * @param e Event object that contains the value of the input
   */
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    // Validate
    if (validations[name] !== null && !validations[name](value)) {
      console.log(name);
      setErrors((prevState) => ([...prevState.filter(error => error.name !== name), { name: name, message: "Invalid " + name }]))
    } else {
      setErrors((prevState) => ([...prevState.filter(error => error.name !== name)]))
    }
    setValues(prevState => ({ ...prevState, [name]: value }))
  }

  return { values, handleChange, errors }
}
