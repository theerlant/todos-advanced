import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import todoPersistToLocal from "./middlewares/todoPersistToLocal";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, applyMiddleware(thunk, todoPersistToLocal));

export default store;
