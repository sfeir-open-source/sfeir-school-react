import React, { useCallback } from "react";
import { Card, CardContent, CardActions, CardAction } from "../solution/Card";
import { TextField } from "@rmwc/textfield";
import { Select } from "@rmwc/select";
import { Form, Formik, Field } from "formik";
import { savePerson } from "../utils";

const PersonFields: React.FC = () => {
  return (
    <CardContent type="person-form">
      <Field name="firstname" as={TextField} label="first name" />
      <Field name="lastname" as={TextField} label="last name" />
      <Field
        name="position"
        as={Select}
        label="position"
        options={[
          "Director",
          "Developer",
          "Product Owner",
          "Sales",
          "Human Resources",
        ]}
      />
      <Field name="phone" as={TextField} label="phone" />
      <Field name="email" as={TextField} label="email" />
    </CardContent>
  );
};

type PersonFormProps = {
  person: Person;
  onReset: () => void;
};

export const PersonForm: React.FC<PersonFormProps> = ({ person, onReset }) => {
  const handleSubmit = useCallback(
    (values) => savePerson(values).then(() => onReset()),
    [person]
  );
  return (
    <Formik initialValues={person} onSubmit={handleSubmit} onReset={onReset}>
      <Card>
        <Form>
          <PersonFields />
          <CardActions>
            <CardAction type="submit">save</CardAction>
            <CardAction type="reset">cancel</CardAction>
          </CardActions>
        </Form>
      </Card>
    </Formik>
  );
};
