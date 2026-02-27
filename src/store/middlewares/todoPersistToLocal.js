import {
  ADD_TODO,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO,
  TOGGLE_COMPLETE,
} from "../types/todoTypes";

const todoPersistToLocal = (store) => (next) => (action) => {
  const result = next(action); // calls reducer before storing to localstorage

  // only react to todos actions
  if (
    action.type === ADD_TODO ||
    action.type === REMOVE_TODO ||
    action.type === TOGGLE_COMPLETE ||
    action.type === FETCH_TODOS_SUCCESS
  ) {
    const state = store.getState();

    localStorage.setItem("todos", JSON.stringify(state.todos.items));
  }

  return result;
};

export default todoPersistToLocal;
