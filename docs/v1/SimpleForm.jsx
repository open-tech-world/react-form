import React from 'react';

import { Form, Field } from '../../src';

export default function SimpleForm() {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <Form initialValues={{ firstName: 'Ganapathy', otherField: [] }} onSubmit={handleSubmit}>
        <div>
          <div>
            <Field name="firstName" />
          </div>
        </div>
        <div>
          <Field name="lastName" />
        </div>
        <div>
          <Field name="accept" type="checkbox" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
}
