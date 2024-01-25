import { FilteredPointsToDisplayState } from "../reducers/filteredPointsToDisplay";

export const filteredPointsActionTypes = {
  SET_FILTERED_POINTS_TO_DISPLAY: "SET_FILTERED_POINTS_TO_DISPLAY",
  RESET_FILTERED_POINTS_TO_DISPLAY: "RESET_FILTERED_POINTS_TO_DISPLAY",
};

export interface SetFilteredPointsToDisplayAction {
  type: typeof filteredPointsActionTypes.SET_FILTERED_POINTS_TO_DISPLAY;
  payload: FilteredPointsToDisplayState["pointsToDisplay"];
}

export interface ResetFilteredPointsToDisplayAction {
  type: typeof filteredPointsActionTypes.SET_FILTERED_POINTS_TO_DISPLAY;
}

export type FilteredPointAction =
  | SetFilteredPointsToDisplayAction
  | ResetFilteredPointsToDisplayAction;
