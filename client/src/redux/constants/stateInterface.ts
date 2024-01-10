import { CurrentPointState } from "../reducers/currentPoint";
import { CurrentSidebarState } from "../reducers/currentSidebar";
import { PointsToDisplayState } from "../reducers/pointsToDisplay";

interface State {
  pointsToDisplay: PointsToDisplayState;
  currentSidebar: CurrentSidebarState;
  currentPoint: CurrentPointState;
}

export default State;
