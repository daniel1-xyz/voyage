import { PointsToDisplayState } from "../reducers/pointsToDisplay";

export const pointsToDisplayActionTypes = {
  FETCH_POINTS_SUCCESS: "FETCH_POINTS_SUCCESS",
  FETCH_POINT_FAILURE: "FETCH_POINTS_FAILURE",
};

export interface FetchPointsSuccessAction {
  type: typeof pointsToDisplayActionTypes.FETCH_POINTS_SUCCESS;
  payload: PointsToDisplayState["pointsToDisplay"];
}

export interface FetchPointsFailureAction {
  type: typeof pointsToDisplayActionTypes.FETCH_POINT_FAILURE;
}

export type FetchPointsAction =
  | FetchPointsSuccessAction
  | FetchPointsFailureAction;
