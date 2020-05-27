import { Types } from "../actions"
const initialState = {
    todos: [],

}
export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SUBMIT_TODO:
            return {
                ...state,

                todos: action.payload,

            };
        default:
            return state;
    }
};
