import React from 'react';

import { Form, Field, FieldArray } from '../../src';

export default function SimpleForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const renderPLField = (languages, push, remove) => {
    return (
      <div>
        {languages.map((l, i) => (
          <div key={`${l}.name`}>
            <Field name={`${l}.name`} component="input" type="text" />
            <button type="button" onClick={() => remove(i)}>
              Del
            </button>
          </div>
        ))}
        <button type="button" onClick={() => push({})}>
          Add
        </button>
      </div>
    );
  };

  const initialValues = {};
  console.log(initialValues);

  return (
    <div>
      <Form onSubmit={handleSubmit} initialValues={initialValues}>
        {(formState) => (
          <>
            <div>
              <label>First Name</label>
              <div>
                <Field name="firstName" component="input" type="text" placeholder="First Name" />
              </div>
            </div>
            <div>
              <label>Last Name</label>
              <div>
                <Field name="lastName" component="input" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div>
                <Field name="email" component="input" type="email" placeholder="Email" />
              </div>
            </div>
            <div>
              <label>Sex</label>
              <div>
                <label>
                  <Field name="sex" component="input" type="radio" value="male" /> Male
                </label>
                <label>
                  <Field name="sex" component="input" type="radio" value="female" /> Female
                </label>
                <label>
                  <Field name="sex" component="input" type="radio" value="other" /> Other
                </label>
              </div>
            </div>
            {formState.sex && formState.sex === 'female' && (
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
            )}

            <div>
              <label htmlFor="employed">Employed</label>
              <div>
                <Field name="employed" id="employed" component="input" type="checkbox" />
              </div>
            </div>
            <div>
              <label>Notes</label>
              <div>
                <Field name="notes" component="textarea" />
              </div>
            </div>
            <div>
              <label>Programming Languages</label>
              <div>
                <FieldArray name="pLangs" component={renderPLField} />
              </div>
            </div>
            <div>
              <br />
              <br />
              <button type="submit">Submit</button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
