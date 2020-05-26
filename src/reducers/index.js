import {combineReducers} from 'redux';
const initialState = {
  todos: [],
};

const listingsReducer = (state = initialState, action) => {
  return state;
};
export default combineReducers({
  listings: listingsReducer,
});
