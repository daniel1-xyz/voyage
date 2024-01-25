import { combineReducers } from "redux";
import { currentPointReducer as currentPoint } from "./currentPoint";
import { currentSidebarReducer as currentSidebar } from "./currentSidebar";
import { filteredPointsToDisplayReducer as filteredPointsToDisplay } from "./filteredPointsToDisplay";
import { pointsToDisplayReducer as pointsToDisplay } from "./pointsToDisplay";

export default combineReducers({
  currentPoint,
  currentSidebar,
  filteredPointsToDisplay,
  pointsToDisplay,
});
