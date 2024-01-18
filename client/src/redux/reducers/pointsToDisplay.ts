import { MapPoint } from "../../types/point";
import {
  FetchPointsAction,
  FetchPointsSuccessAction,
  InsertPointAction,
  UpdateSpecificPointAction,
  pointsToDisplayActionTypes,
} from "../constants/pointsToDisplay";
import { RootState } from "../store";

export interface PointsToDisplayState {
  pointsToDisplay: Array<MapPoint>;
}

export const initialState: PointsToDisplayState = {
  pointsToDisplay: [],
};

export const pointsToDisplayReducer = (
  state: PointsToDisplayState = initialState,
  action: FetchPointsAction
): RootState["pointsToDisplay"] => {
  switch (action.type) {
    case pointsToDisplayActionTypes.FETCH_POINTS_SUCCESS:
      return {
        ...state,
        pointsToDisplay: (action as FetchPointsSuccessAction).payload,
      };
    case pointsToDisplayActionTypes.FETCH_POINT_FAILURE:
      return state;
    case pointsToDisplayActionTypes.UPDATE_SPECIFIC_POINT:
      const updatedPoint = (action as UpdateSpecificPointAction).payload;
      const updatedPointsToDisplay: Array<MapPoint> = state.pointsToDisplay.map(
        (point) => (point.id === updatedPoint.id ? updatedPoint : point)
      );
      return { ...state, pointsToDisplay: updatedPointsToDisplay };
    case pointsToDisplayActionTypes.INSERT_POINT:
      return {
        ...state,
        pointsToDisplay: [
          ...state.pointsToDisplay,
          (action as InsertPointAction).payload,
        ],
      };
    default:
      return state;
  }
};
