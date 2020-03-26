import { useContext } from 'react';

import context from './formContext';

export default function useFormContext() {
  return useContext(context);
}
