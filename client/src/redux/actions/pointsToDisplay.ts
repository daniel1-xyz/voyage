import { MapPoint } from "../../types/point";
import State from "../constants/stateInterface";
import {
  FetchPointsFailureAction,
  FetchPointsSuccessAction,
  pointsToDisplayActionTypes,
} from "../constants/pointsToDisplay";
import { PointsToDisplayState } from "../reducers/pointsToDisplay";

export const fetchPointsSuccess = (
  pointsToDisplay: PointsToDisplayState["pointsToDisplay"]
): FetchPointsSuccessAction => ({
  type: pointsToDisplayActionTypes.FETCH_POINTS_SUCCESS,
  payload: pointsToDisplay,
});

export const fetchPointsFailure = (error: Error): FetchPointsFailureAction => ({
  type: pointsToDisplayActionTypes.FETCH_POINT_FAILURE,
  payload: error,
});
