import {login as loginService} from '../services';

export const Types = {
  SET_TODOS: 'SUBMIT_TODO',
};
export const Actions = {
  setTodos: results => ({
    type: 'SUBMIT_TODO',
    payload: {
      title: results,
    },
  }),
};
