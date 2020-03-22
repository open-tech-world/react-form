import React from 'react';
import TextField from '@material-ui/core/TextField';

import { Form, Field } from '../../src';

function MUITextField(props) {
  const { type, label, onChange, value, required } = props;
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      type={type}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
}

export default function SimpleForm() {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} initialValues={{ employed: 'Salaried' }}>
        <div>
          <Field
            name="firstName"
            component={MUITextField}
            type="email"
            placeholder="First Name"
          />
        </div>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field name="sex" component="input" type="radio" value="male" />{' '}
              Male
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="female" />{' '}
              Female
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="other" />{' '}
              Other
            </label>
          </div>
        </div>
        <div>
          <label>Favorite Color</label>
          <div>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </div>
        </div>
        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
}
