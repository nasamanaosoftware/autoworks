import {ADD_TODO, REMOVE_TODO} from '../actions/todoAction/ActionTypes';

const INITIAL_STATE = {todos: []};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {todos: [...state.todos, action.payload]};
    case REMOVE_TODO:
      return {todos: handleRemoveTodo(action.payload, state.todos)};
    default:
      return state;
  }
};

const handleRemoveTodo = (item, todos) => {
  return {todos: todos.filter((e, i) => e != item)}
};
export default todoReducer;
