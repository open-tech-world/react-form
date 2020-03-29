import { setIn } from './util';

export interface IAction {
  type: string;
  payload: any;
}

export default function reducer(state: object, action: IAction): object {
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
