const init = [];

const reducer = (state = init, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESSED':
      return {
        ...state,
        listTodo: action.listTodo,
        loading: false,
      };
    case 'FAILT':
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};
export default reducer;
