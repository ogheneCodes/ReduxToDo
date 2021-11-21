import todoTypes from "./todo-types";

const INITIAL_STATE = [];

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return [action.payload, ...state];
    case todoTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case todoTypes.TOGGLE_COMPLETED:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : { ...todo }
      );
    default:
      return state;
  }
};

export default todoReducer;
