import React, { useReducer } from 'react';

import FormContext from './formContext';
import reducer from './reducer';

interface IProps {
  initialValues?: object;
  onSubmit: (values: object) => void;
  children: React.ReactNode[];
}

function Form(props: IProps) {
  const [state, dispatch] = useReducer(reducer, props.initialValues || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(state);
  };

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form onSubmit={handleSubmit}>{props.children}</form>
    </FormContext.Provider>
  );
}

export default Form;
