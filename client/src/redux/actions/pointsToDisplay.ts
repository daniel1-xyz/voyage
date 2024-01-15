import { MapPoint } from "../../types/point";
import {
  FetchPointsFailureAction,
  FetchPointsSuccessAction,
  InsertPointAction,
  pointsToDisplayActionTypes,
  UpdateSpecificPointAction,
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
});

export const updateSpecificPoint = (
  updatedPoint: MapPoint
): UpdateSpecificPointAction => ({
  type: pointsToDisplayActionTypes.UPDATE_SPECIFIC_POINT,
  payload: updatedPoint,
});

export const insertPoint = (point: MapPoint): InsertPointAction => ({
  type: pointsToDisplayActionTypes.INSERT_POINT,
  payload: point,
});
