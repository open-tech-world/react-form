import React, { useReducer } from 'react';

import Field from './Field';
import FormContext from './formContext';
import reducer from './reducer';

interface IProps {
  onSubmit: (values: object) => void;
  children: React.ReactNode[];
}

function Form(props: IProps) {
  const [state, dispatch] = useReducer(reducer, {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(state);
  };

  const renderChildren = (children: React.ReactNode[]): React.ReactNode[] => {
    return React.Children.map(children, child => {
      if (child && React.isValidElement(child)) {
        if (child.type === Field) {
          return React.cloneElement(child, {
            context: FormContext,
            ...child.props,
          });
        }
        if (child.props.children) {
          return React.cloneElement(child, {
            ...child.props,
            children: renderChildren(child.props.children),
          });
        }
      }
      return child;
    });
  };

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form onSubmit={handleSubmit}>{renderChildren(props.children)}</form>
    </FormContext.Provider>
  );
}

export default Form;
