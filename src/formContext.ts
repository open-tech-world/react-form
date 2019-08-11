import React from 'react';

import { IAction } from './reducer';

export interface IFormContext {
  state: { [key: string]: any };
  dispatch: React.Dispatch<IAction>;
}

export default React.createContext<IFormContext>({
  dispatch: () => null,
  state: {},
});
