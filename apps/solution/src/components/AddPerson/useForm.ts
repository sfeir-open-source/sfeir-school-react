import { FormEvent, useMemo, useState } from "react";
import { PersonModel } from "../../api/person";

export default function useForm(initialState: PersonModel, validations: Record<string, (value: string) => boolean | void>, incomingOnSubmit: (arg0: PersonModel) => void) {
  const [values, setValues] = useState<PersonModel>(initialState)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const isValid = useMemo(() => Object.values(errors).every(value => value === undefined), [errors])

  function validate(name: string, value: string) {
    if (validations[name] !== null && !validations[name](value)) {
      setErrors((prevState) => ({ ...prevState, [name]: 'Invalid ' + name }))
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: undefined }))
    }
  }

  /**
   * Controls the inputs https://reactjs.org/docs/forms.html#controlled-components
   * @param e Event object that contains the value of the input
   */
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    // Validate
    validate(name, value)
    setValues(prevState => ({ ...prevState, [name]: value }))
  }

  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (isValid) {
      incomingOnSubmit(values)
    }
  }

  return { values, handleChange, onSubmit, errors }
}
