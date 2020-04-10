import React, { useReducer, forwardRef, useEffect } from 'react';

import FormContext from './formContext';
import reducer from './reducer';

interface IProps {
  initialValues?: object;
  onSubmit: (values: object) => void;
  children: (formState: object) => React.ReactNode | React.ReactNode;
}

export const Form = forwardRef((props: IProps, ref: any) => {
  const [state, dispatch] = useReducer(reducer, props.initialValues || {});

  useEffect(() => {
    if (props.initialValues) {
      dispatch({ type: 'SET_STATE', payload: props.initialValues });
    }
  }, [props.initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(state);
  };

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form ref={ref} onSubmit={handleSubmit}>
        {typeof(props.children) === 'function' ? props.children(state) : props.children}
      </form>
    </FormContext.Provider>
  );
});
