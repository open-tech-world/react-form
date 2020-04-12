import { setIn, objectType } from './util';

export interface Action {
  type: string;
  payload: any;
}

export default function reducer(state: objectType, action: Action): object {
  switch (action.type) {
    case 'RESET':
      return { ...action.payload };
    case 'SET_FIELD':
      return setIn(state, action.payload.name, action.payload.value);
    case 'SET_STATE':
      return { ...action.payload };
    default:
      throw new Error();
  }
}
