import {
  ADD_TODO,
  FETCH_TODOS_FAILED,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO,
  TOGGLE_COMPLETE,
} from "../types/todoTypes";

const initialState = {
  loading: false,
  items: [],
  error: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TODOS_FAILED:
      return {
        loading: false,
        items: [],
        error: action.payload,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        items: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default todoReducer;
