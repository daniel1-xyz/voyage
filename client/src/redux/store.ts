import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { MapPoint } from "../types/point";
import { sidebarCodes } from "./sidebarCodes";

export const defaultState = {
  POINTS_TO_DISPLAY: [],
  CURRENT_SIDEBAR: sidebarCodes.NO_SIDEBAR,
  CURRENT_POINT: undefined,
};

export interface State {
  pointsToDisplay: Array<MapPoint>;
  currentSidebar: string;
  currentPoint: MapPoint | undefined;
}

const rootState: State = {
  pointsToDisplay: defaultState.POINTS_TO_DISPLAY,
  currentSidebar: defaultState.CURRENT_SIDEBAR,
  currentPoint: defaultState.CURRENT_POINT,
};

const store = createStore(rootReducer, rootState as Partial<State>);

export default store;
