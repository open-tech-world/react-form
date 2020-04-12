import React from 'react';

import { Action } from './reducer';

export interface FormContext {
  state: { [key: string]: unknown };
  dispatch: React.Dispatch<Action>;
}

export default React.createContext<FormContext>({
  dispatch: () => null,
  state: {},
});
