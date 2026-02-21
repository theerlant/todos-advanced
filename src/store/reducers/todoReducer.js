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

const initialState = {
  loading: false,
  items: [],
  error: "",
  todoInput: "",
  todoError: "",
  nextId: 1,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
        todoInput: "",
        todoError: "",
        nextId: state.nextId + 1,
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
    case FETCH_TODOS_SUCCESS: {
      const highestId =
        action.payload.length > 0
          ? Math.max(...action.payload.map((item) => item.id))
          : 0; // Find highest id from fetched data

      return {
        ...state,
        loading: false,
        items: action.payload,
        error: "",
        nextId: highestId + 1,
      };
    }
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
        todoError: "", // Clear error when user types
      };
    case SET_TODO_ERROR:
      return {
        ...state,
        todoError: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
