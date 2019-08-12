import React from 'react';
import Select from 'react-select';

import { Form, Field } from '../../src';

export default function SimpleForm() {
  const handleSubmit = values => {
    console.log(values);
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const renderSelect = ({ onChange, value }) => {
    return <Select options={options} onChange={onChange} value={value} />;
  };

  return (
    <div>
      <Form initialValues={{}} onSubmit={handleSubmit}>
        <Field name="Fruit" component={renderSelect} />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
