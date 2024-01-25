import {
  SetFilteredPointsToDisplayAction,
  ResetFilteredPointsToDisplayAction,
  filteredPointsActionTypes,
} from "../constants/filteredPointsToDisplay";
import { FilteredPointsToDisplayState } from "../reducers/filteredPointsToDisplay";

export const setFilteredPointsToDisplay = (
  filteredPointsToDisplay: FilteredPointsToDisplayState["pointsToDisplay"]
): SetFilteredPointsToDisplayAction => ({
  type: filteredPointsActionTypes.SET_FILTERED_POINTS_TO_DISPLAY,
  payload: filteredPointsToDisplay,
});

export const resetFilteredPointsToDisplay = (
  filteredPointsToDisplay: FilteredPointsToDisplayState["pointsToDisplay"]
): ResetFilteredPointsToDisplayAction => ({
  type: filteredPointsActionTypes.RESET_FILTERED_POINTS_TO_DISPLAY,
});
