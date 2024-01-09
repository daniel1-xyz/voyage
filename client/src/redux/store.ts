import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import defaultState from "./constants/defaultState";
import State from "./constants/stateInterface";

const rootState: State = {
  pointsToDisplay: defaultState.POINTS_TO_DISPLAY,
  currentSidebar: defaultState.CURRENT_SIDEBAR,
  currentPoint: defaultState.CURRENT_POINT,
};

const store = createStore(rootReducer, rootState as Partial<State>);

export default store;
