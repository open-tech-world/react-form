import React, { useContext, useMemo } from 'react';

import { IFormContext } from './formContext';

interface IProps {
  name: string;
  type: string;
  component: string | React.ComponentType;
  context: React.Context<IFormContext>;
}

export default function Field(props: IProps) {
  const { name, type, component, context, ...otherProps } = props;
  const { state, dispatch } = useContext(context);
  const Component = component || 'input';
  const Type = type || 'text';

  const handleChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: 'set', payload: { name, value: e.currentTarget.value } });
  };
  return useMemo(() => {
    return React.createElement<React.InputHTMLAttributes<HTMLInputElement>>(
      Component,
      {
        onChange: handleChange,
        type: Type,
        value: state[name],
        ...otherProps,
      }
    );
  }, [state[name]]);
}
