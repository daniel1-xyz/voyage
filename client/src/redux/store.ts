import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { thunk } from "redux-thunk";

const enhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, {}, enhancer);

export type RootState = typeof store.getState;
export type AppDispatch = typeof store.dispatch;

export default store;
