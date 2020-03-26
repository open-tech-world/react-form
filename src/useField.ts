import useFormContext from './useFormContext';

export default function useField() {
  const context = useFormContext();
  return {
    state: context.state,
    setFieldValue: (fieldName: string, fieldValue: any) => {
      context.dispatch({
        type: 'set',
        payload: { name: fieldName, value: fieldValue },
      });
    },
  };
}
