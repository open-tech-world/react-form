import React, { useMemo } from 'react';

import useFormContext from './useFormContext';

interface IProps {
  name: string;
  type: string;
  component: string | React.ComponentType;
  value: any;
}

export default function Field(props: IProps) {
  const { name, type, component, value, ...otherProps } = props;
  const { state, dispatch } = useFormContext();

  const handleChange = (newValue: any) => {
    const value =
      newValue && newValue.currentTarget
        ? newValue.currentTarget.value
        : newValue;
    dispatch({ type: 'SET_FIELD', payload: { name, value } });
  };

  const componentProps = {
    name,
    type,
    onChange: handleChange,
    ...otherProps,
  };

  const renderNativeComponent = () => {
    if (type === 'checkbox') {
      return React.createElement<React.InputHTMLAttributes<HTMLInputElement>>(
        component,
        {
          checked: state[name] ? true : false,
          value: state[name] || false,
          ...componentProps,
          onChange: (e: any) => {
            e.target.checked
              ? handleChange(value ? value : true)
              : handleChange(value ? '' : false);
          },
        }
      );
    }
    return React.createElement<React.InputHTMLAttributes<HTMLInputElement>>(
      component,
      {
        value: value || state[name] || '',
        ...componentProps,
      }
    );
  };

  const renderNativeOrCustomComponent = () => {
    if (typeof component === 'string') {
      return renderNativeComponent();
    }

    return React.createElement<React.InputHTMLAttributes<HTMLInputElement>>(component, {
      value: state[name],
      ...componentProps,
    });
  };

  return useMemo(() => renderNativeOrCustomComponent(), [state[name]]);
}
