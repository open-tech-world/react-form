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

  const handleChange = (newValue: any) => {
    const value =
      newValue && newValue.currentTarget
        ? newValue.currentTarget.value
        : newValue;
    dispatch({ type: 'set', payload: { name, value } });
  };

  return useMemo(() => {
    return React.createElement<React.InputHTMLAttributes<HTMLInputElement>>(
      Component,
      {
        name,
        onChange: handleChange,
        type: Type,
        value: state[name],
        ...otherProps,
      }
    );
  }, [state[name]]);
}
