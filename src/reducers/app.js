import {Types} from '../actions';

export const actions = {
  setTodos: results => ({
    type: 'SUBMIT_TODO',
    payload: {
      title: results,
    },
  }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SUBMIT_TODO:
      return {
        ...state,
        results: action.payload.results,
      };
    default:
      return state;
  }
};
