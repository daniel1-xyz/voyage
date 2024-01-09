import { combineReducers } from "redux";
import { currentPointReducer as currentPoint } from "./currentPoint";
import { currentSidebarReducer as currentSidebar } from "./currentSidebar";

export default combineReducers({
  currentPoint,
  currentSidebar,
});
