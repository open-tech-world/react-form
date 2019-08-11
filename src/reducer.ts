export interface IAction {
  type: string;
  payload: any;
}

export default function reducer(state: object, action: IAction): object {
  switch (action.type) {
    case 'reset':
      return { ...action.payload };
    case 'set':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'setValues':
      return { ...action.payload };
    default:
      throw new Error();
  }
}
