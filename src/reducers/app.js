import {Types} from '../actions';

export const actions = {
  setTodos: todoTask => ({
    type: 'SUBMIT_TODO',
    payload: {
      title: todoTask,
    },
  }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SUBMIT_TODO:
      return {
        ...state,
        todos: action.payload.todoTask,
      };
    default:
      return state;
  }
};
