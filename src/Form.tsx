import React from 'react';

import FormContext from './formContext';
import reducer from './reducer';

interface IProps {
  onSubmit: (values: object) => void;
  children: JSX.Element[];
}

function Form(props: IProps) {
  const [state, dispatch] = React.useReducer(reducer, { userId: 55 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(state);
  };

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      return React.cloneElement(child, {
        dispatch,
        ...child.props,
      });
    });
  };

  return (
    <FormContext.Provider value={{ errors: {} }}>
      <form onSubmit={handleSubmit}>{renderChildren()}</form>
    </FormContext.Provider>
  );
}

export default Form;
