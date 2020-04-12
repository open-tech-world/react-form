import React, { useReducer, forwardRef, useEffect } from 'react';

import FormContext from './formContext';
import reducer from './reducer';
import { deepClone } from './util';

interface Props {
  initialValues?: object;
  onSubmit: (values: object) => void;
  children: (formState: object) => React.ReactNode | React.ReactNode;
}

export default forwardRef((props: Props, ref: React.Ref<HTMLFormElement>) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, deepClone(props.initialValues) || {});

  useEffect(() => {
    if (props.initialValues) {
      dispatch({ type: 'SET_STATE', payload: deepClone(props.initialValues) });
    }
  }, [props.initialValues]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    props.onSubmit(state);
  };

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form ref={ref} onSubmit={handleSubmit}>
        {typeof props.children === 'function' ? props.children(state) : props.children}
      </form>
    </FormContext.Provider>
  );
});
