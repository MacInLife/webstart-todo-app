export const Types = {
  SetTodos: 'SUBMIT_TODO',
};
export const Actions = {
  setTodos: results => ({
    type: Types.SetTodos,
    payload: results,
  }),
};
