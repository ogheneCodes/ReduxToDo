import todoTypes from "./todo-types";

export const addTodo = (payload) => ({
  type: todoTypes.ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: todoTypes.DELETE_TODO,
  payload,
});

export const toggleCompleted = (payload) => ({
  type: todoTypes.TOGGLE_COMPLETED,
  payload,
});
