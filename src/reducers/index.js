import {combineReducers} from 'redux';
const initialState = {
  todos: [],
};
const todoReducer = (state = initialState, action) => {
  return state;
};
export default combineReducers({
  todos: todoReducer,
});
