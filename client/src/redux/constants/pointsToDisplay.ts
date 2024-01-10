import State from "./stateInterface";

export const pointsToDisplayActionTypes = {
  FETCH_POINTS_SUCCESS: "FETCH_POINTS_SUCCESS",
  FETCH_POINT_FAILURE: "FETCH_POINTS_FAILURE",
};

export interface FetchPointsSuccessAction {
  type: string;
  payload: State["pointsToDisplay"];
}

export interface FetchPointsFailureAction {
  type: string;
  payload: Error;
}

export type FetchPointsAction =
  | FetchPointsSuccessAction
  | FetchPointsFailureAction;
