import { sidebarCodes } from "./sidebarCodes";
import { MapPoint } from "../../types/point";

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
