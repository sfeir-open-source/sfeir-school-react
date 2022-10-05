import { useState } from "react";
import { PersonModel } from "../../api/person";

export default function useForm(initialState: PersonModel, validations = []) {
  const [values, setValues] = useState(initialState || {})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(true)

  /**
   * Controls the inputs https://reactjs.org/docs/forms.html#controlled-components
   * @param e Event object that contains the value of the input
   */
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setValues(prevState => ({ ...prevState, [name]: value }))
  }

  return { values, handleChange }
}
