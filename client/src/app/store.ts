import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const initialState = {
  pointsToDisplay: [],
  openSidebar: "",
  currentPoint: undefined,
};

const store = createStore(rootReducer, initialState);

export default store;
