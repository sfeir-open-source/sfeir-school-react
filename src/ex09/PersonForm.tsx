import React from "react";
import {Card, CardContent, CardActions, CardAction} from "../solution/Card";
import {TextField} from "@rmwc/textfield";
import {Select} from "@rmwc/select";
import {Formik, useFormikContext} from "formik";

const PersonFields: React.FC = () => {
  const {values, errors, handleChange} = useFormikContext<Person>();

  return (
      <CardContent type="person-form">
        <TextField label="first name" name="firstname" value={values.firstname} onChange={handleChange} />
        <TextField label="last name" name="lastname" value={values.lastname} onChange={handleChange}/>
        <Select
            label="position"
            name="position"
            options={[
              "Director",
              "Developer",
              "Product Owner",
              "Sales",
              "Human Resources",
            ]}
            value={values.position}
            onChange={handleChange}
        />
        <TextField label="phone" name="phone" value={values.phone} onChange={handleChange}/>
        <TextField label="email" name="email" value={values.email} onChange={handleChange}/>

        <div style={{ color: "red" }}>{JSON.stringify(errors)}</div>
      </CardContent>
  );
};

type PersonFormProps = {
  person: Person;
  onSubmit: (values: Person) => void;
};

export const PersonForm: React.FC<PersonFormProps> = ({person, onSubmit}) => {
  const onValidate = (values) => {
    const errors = {};

    Object.keys(values).forEach(key => {
      if (values[key] === "") {
        errors[key] = "Required";
      }
    });

    return errors;
  };

  return (
      <Card>
        <Formik initialValues={person} validate={onValidate} onSubmit={onSubmit}>

          {({handleSubmit, errors }) => (
              <form onSubmit={handleSubmit}>
                <PersonFields/>
                <CardActions>
                  <CardAction type="submit" disabled={Object.keys(errors).length > 0}>save</CardAction>
                  <CardAction type="reset">cancel</CardAction>
                </CardActions>
              </form>
          )}

        </Formik>
      </Card>
  );
};
