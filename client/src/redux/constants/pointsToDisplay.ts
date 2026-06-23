import { MapPoint } from "../../types/point";
import { PointsToDisplayState } from "../reducers/pointsToDisplay";

export const pointsToDisplayActionTypes = {
  FETCH_POINTS_SUCCESS: "FETCH_POINTS_SUCCESS",
  FETCH_POINT_FAILURE: "FETCH_POINTS_FAILURE",
  UPDATE_SPECIFIC_POINT: "UPDATE_SPECIFIC_POINT",
  INSERT_POINT: "INSERT_POINT",
};

export interface FetchPointsSuccessAction {
  type: typeof pointsToDisplayActionTypes.FETCH_POINTS_SUCCESS;
  payload: PointsToDisplayState["pointsToDisplay"];
}

export interface FetchPointsFailureAction {
  type: typeof pointsToDisplayActionTypes.FETCH_POINT_FAILURE;
}

export interface UpdateSpecificPointAction {
  type: typeof pointsToDisplayActionTypes.UPDATE_SPECIFIC_POINT;
  payload: MapPoint;
}

export interface InsertPointAction {
  type: typeof pointsToDisplayActionTypes.INSERT_POINT;
  payload: MapPoint;
}

export type FetchPointsAction =
  | FetchPointsSuccessAction
  | FetchPointsFailureAction
  | UpdateSpecificPointAction
  | InsertPointAction;
