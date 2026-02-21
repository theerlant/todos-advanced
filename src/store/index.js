import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const store = createStore(
  reducers,
  applyMiddleware(thunk), // flag redux devtools
);

export default store;
