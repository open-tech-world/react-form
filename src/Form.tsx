import React, { useReducer } from 'react';

import FormContext from './formContext';
import reducer from './reducer';

interface IProps {
  onSubmit: (values: object) => void;
  children: JSX.Element[];
}

function Form(props: IProps) {
  const [state, dispatch] = useReducer(reducer, {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(state);
  };

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      return React.cloneElement(child, {
        context: FormContext,
        ...child.props,
      });
    });
  };

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form onSubmit={handleSubmit}>{renderChildren()}</form>
    </FormContext.Provider>
  );
}

export default Form;
