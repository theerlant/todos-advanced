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

    let loaded = false;

    await new Promise((resolve) => setTimeout(resolve, 2000)); // await new promise object that return resolve after 2s using setTimeout

    // load from localstorage first
    const itemString = localStorage.getItem("todos");
    if (itemString) {
      try {
        // try parse and check length
        const items = JSON.parse(itemString);

        if (items.length !== 0) {
          loaded = true;
          dispatch({
            type: FETCH_TODOS_SUCCESS,
            payload: items,
          });
        }
      } catch (error) {
        // error loading items, fetch from api.
        loaded = false;

        console.error("parse error:", error.message);
      }
    }

    if (!loaded) {
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
    }
  };
};
