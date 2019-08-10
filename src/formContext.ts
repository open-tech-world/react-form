import React from 'react';

export interface IFormContext {
  errors: object;
}

export default React.createContext<IFormContext>({
  errors: {},
});
