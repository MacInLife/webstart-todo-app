export const Types = {
    SUBMIT_TODO: 'SUBMIT_TODO',


}
export const Actions = {
    setTodos: (results) => ({
        type: Types.SUBMIT_TODO,
        payload: results
    }),

}