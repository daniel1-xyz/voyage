import { MapPoint } from "../../types/point";

interface State {
  pointsToDisplay: Array<MapPoint>;
  currentSidebar: string;
  currentPoint: MapPoint | undefined;
}

export default State;
