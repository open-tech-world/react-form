import React, { useMemo } from 'react';

import useFormContext from './useFormContext';
import { getIn } from './util';

interface Props {
  name: string;
  component: (fields: Array<any>, push: (obj: object) => void, remove: (index: number) => void) => void;
}

export default function FieldArray(this: any, props: Props): React.ReactNode | void {
  const { name, component } = props;
  const { state, dispatch } = useFormContext();
  const currentValue: Array<any> = getIn(state, name) || [];

  const handlePush = (obj: object) => {
    dispatch({
      type: 'SET_FIELD',
      payload: { name, value: [...currentValue, obj] },
    });
  };

  const handleRemove = (index: number): void => {
    dispatch({
      type: 'SET_FIELD',
      payload: { name, value: currentValue.filter((v, i) => index !== i) },
    });
  };

  const fields = currentValue.map((f: any, i: number) => `${name}[${i}]`);

  return useMemo(() => component.call(this, fields, handlePush, handleRemove), [currentValue]);
}
