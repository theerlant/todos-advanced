import axios from "axios";
import {
  ADD_TODO,
  FETCH_TODOS_FAILED,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO,
  TOGGLE_COMPLETE,
  SET_TODO_INPUT,
  SET_TODO_ERROR,
} from "../types/todoTypes";

export const addItem = (item) => ({
  type: ADD_TODO,
  payload: item,
});

export const removeItem = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: id,
});

export const setTodoInput = (text) => ({
  type: SET_TODO_INPUT,
  payload: text,
});

export const setTodoError = (error) => ({
  type: SET_TODO_ERROR,
  payload: error,
});

export const fetchItems = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const items = response.data;
        dispatch({
          type: FETCH_TODOS_SUCCESS,
          payload: items,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_TODOS_FAILED,
          payload: error.message,
        });
      });
  };
};
