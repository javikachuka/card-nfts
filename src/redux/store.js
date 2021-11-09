import { applyMiddleware, createStore } from "redux";
import reducerAuth from './auth/reducers'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(reducerAuth, composeWithDevTools(applyMiddleware(thunk)))