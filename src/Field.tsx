/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';

import useFormContext from './useFormContext';
import { getIn } from './util';

interface Props {
  name: string;
  type: string;
  component: string | React.ComponentType;
  value: unknown;
}

export default function Field(props: Props): React.ReactNode {
  const { name, type, component, value, ...otherProps } = props;
  const { state, dispatch } = useFormContext();
  const currentValue = getIn(state, name);

  const handleChange = (newValue: any): void => {
    const value = newValue && newValue.currentTarget ? newValue.currentTarget.value : newValue;
    dispatch({ type: 'SET_FIELD', payload: { name, value } });
  };

  const componentProps = {
    name,
    type,
    onChange: handleChange,
    ...otherProps,
  };

  const renderNativeComponent = (): React.ReactNode => {
    if (type === 'checkbox') {
      return React.createElement(component, {
        checked: currentValue ? true : false,
        value: currentValue || false,
        ...componentProps,
        // @ts-ignore
        onChange: (e: any) => {
          e.target.checked ? handleChange(value ? value : true) : handleChange(value ? '' : false);
        },
      });
    }
    return React.createElement(component, {
      // @ts-ignore
      value: currentValue,
      ...componentProps,
    });
  };

  const renderNativeOrCustomComponent = (): React.ReactNode => {
    if (typeof component === 'string') {
      return renderNativeComponent();
    }

    return React.createElement<React.InputHTMLAttributes<HTMLInputElement>>(component, {
      value: currentValue as any,
      ...componentProps,
    });
  };

  return renderNativeOrCustomComponent();
}
