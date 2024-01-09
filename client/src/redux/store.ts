import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import defaultState from "./constants/defaultState";
import State from "./constants/stateInterface";
import { thunk } from "redux-thunk";

const rootState: State = {
  pointsToDisplay: defaultState.POINTS_TO_DISPLAY,
  currentSidebar: defaultState.CURRENT_SIDEBAR,
  currentPoint: defaultState.CURRENT_POINT,
};

const enhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, rootState as Partial<State>, enhancer);

export default store;
