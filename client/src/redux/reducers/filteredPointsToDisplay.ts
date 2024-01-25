import { MapPoint } from "../../types/point";
import {
  FilteredPointAction,
  SetFilteredPointsToDisplayAction,
  filteredPointsActionTypes,
} from "../constants/filteredPointsToDisplay";
import { RootState } from "../store";

export interface FilteredPointsToDisplayState {
  pointsToDisplay: Array<MapPoint>;
}

export const initialState: FilteredPointsToDisplayState = {
  pointsToDisplay: [],
};

export const filteredPointsToDisplayReducer = (
  state: FilteredPointsToDisplayState = initialState,
  action: FilteredPointAction
): RootState["filteredPointsToDisplay"] => {
  switch (action.type) {
    case filteredPointsActionTypes.SET_FILTERED_POINTS_TO_DISPLAY:
      return {
        ...state,
        pointsToDisplay: (action as SetFilteredPointsToDisplayAction).payload,
      };
    case filteredPointsActionTypes.RESET_FILTERED_POINTS_TO_DISPLAY:
      return {
        ...state,
        pointsToDisplay: initialState.pointsToDisplay,
      };
    default:
      return state;
  }
};
