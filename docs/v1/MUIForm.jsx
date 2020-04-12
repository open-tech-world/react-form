import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core';

import { Form, Field, FieldArray } from '../../src';

function MUITextField(props) {
  const { type, label, onChange, value, required } = props;
  return (
    <Box m={2} flexGrow={1}>
      <TextField
        fullWidth
        label={label}
        variant="outlined"
        type={type}
        onChange={onChange}
        value={value}
        required={required}
      />
    </Box>
  );
}

export default function MUIForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={{ firstName: '' }}>
      <Field
        name="firstName"
        label="First Name"
        component={MUITextField}
        type="text"
      />
      <br />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Form>
  );
}
