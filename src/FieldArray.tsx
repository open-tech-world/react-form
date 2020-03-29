import React, { useMemo } from 'react';

import useFormContext from './useFormContext';
import { getIn } from './util';

interface IProps {
  name: string;
  component: (fields: Array<any>, push: (obj: object) => void) => void;
}

export default function FieldArray(this: any, props: IProps) {
  const { name, component } = props;
  const { state, dispatch } = useFormContext();
  const currentValue = getIn(state, name) || [];

  const handlePush = (obj: object) => {
    dispatch({
      type: 'SET_FIELD',
      payload: { name, value: [...currentValue, obj] },
    });
  };

  const fields = currentValue.map((f: any, i: number) => `${name}[${i}]`);

  return useMemo(() => component.call(this, fields, handlePush), [
    currentValue,
  ]);
}
