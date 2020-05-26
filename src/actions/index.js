export const Types = {
  SET_TODOS: 'SUBMIT_TODO',
};
export const Actions = {
  setTodos: results => ({
    type: Types.SET_TODOS,
    payload: results,
  }),
};
