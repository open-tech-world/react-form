import React, { useContext, useMemo } from 'react';

import { IFormContext } from './formContext';

interface IProps {
  name: string;
  type: string;
  component: string | React.ComponentType;
  value: any;
  context: React.Context<IFormContext>;
}

export default function Field(props: IProps) {
  const { name, type, component, value, context, ...otherProps } = props;
  const { state, dispatch } = useContext(context);

  const handleChange = (newValue: any) => {
    const value =
      newValue && newValue.currentTarget
        ? newValue.currentTarget.value
        : newValue;
    dispatch({ type: 'set', payload: { name, value } });
  };

  const componentProps = {
    name,
    onChange: handleChange,
    ...otherProps,
  };

  const renderNativeComponent = () => {
    if (type === 'checkbox') {
      return React.createElement<React.InputHTMLAttributes<HTMLInputElement>>(
        component,
        {
          type,
          checked: state[name] ? true : false,
          value: state[name] || false,
          ...componentProps,
          onChange: e => {
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
        type,
        value: value || state[name] || '',
        ...componentProps,
      }
    );
  };

  const renderNativeOrCustomComponent = () => {
    if (typeof component === 'string') {
      return renderNativeComponent();
    }
    return React.createElement<React.InputHTMLAttributes<HTMLInputElement>>(
      component,
      {
        value: state[name],
        ...componentProps,
      }
    );
  };

  return useMemo(() => renderNativeOrCustomComponent(), [state[name]]);
}
