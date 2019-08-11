import React from 'react';

import { Form, Field } from '../../src';

export default function SimpleForm() {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Field name="firstName" />
        <Field name="lastName" />
        <Field name="accept" type="checkbox" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
