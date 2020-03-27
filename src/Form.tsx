import React, { useReducer, forwardRef } from 'react';

import FormContext from './formContext';
import reducer from './reducer';

interface IProps {
  initialValues?: object;
  onSubmit: (values: object) => void;
  children: React.ReactNode[];
}

export const Form = forwardRef((props: IProps, ref: any) => {
  const [state, dispatch] = useReducer(reducer, props.initialValues || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(state);
  };

  return  (
    <FormContext.Provider value={{ state, dispatch }}>
      <form ref={ref} onSubmit={handleSubmit}>
        {props.children}
      </form>
    </FormContext.Provider>
  );
})
