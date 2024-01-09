import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { MapPoint } from "../types/point";
import { sidebarCodes } from "./sidebarCodes";

export const DEFAULT_POINTS_TO_DISPLAY = [];
export const DEFAULT_OPEN_SIDEBAR = sidebarCodes.NO_SIDEBAR;
export const DEFAULT_CURRENT_POINT = undefined;

export interface RootState {
  pointsToDisplay: Array<MapPoint>;
  openSidebar: string;
  currentPoint: MapPoint | undefined;
}

const rootState: RootState = {
  pointsToDisplay: DEFAULT_POINTS_TO_DISPLAY,
  openSidebar: DEFAULT_OPEN_SIDEBAR,
  currentPoint: DEFAULT_CURRENT_POINT,
};

const store = createStore(rootReducer, rootState);

export default store;
