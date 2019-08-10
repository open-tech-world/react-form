import React from 'react';

import { IFormContext } from './formContext';

interface IProps {
  name: string;
  component: string | React.ComponentType;
  // context: React.Context<IFormContext>;
  dispatch: (obj: object) => void;
}

function Field({ name, component, dispatch, ...otherProps }: IProps) {
  // const { errors } = React.useContext(context);
  // tslint:disable-next-line: no-console
  // console.log(errors);
  const Component = component || 'input';

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({ type: 'set', payload: { name, value: e.currentTarget.value } });
  };

  return React.createElement(Component, {
    // @ts-ignore
    onChange: handleChange,
    ...otherProps,
  });
}

export default Field;
