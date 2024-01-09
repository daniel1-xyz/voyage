import { MapPoint } from "../../types/point";

export const currentPointActionTypes = {
  SET_CURRENT_POINT: "SET_CURRENT_POINT",
  RESET_CURRENT_POINT: "RESET_CURRENT_POINT",
};

export interface SetCurrentPointAction {
  type: string;
  payload: MapPoint;
}

export interface ResetCurrentPointAction {
  type: string;
}

export type CurrentPointAction =
  | SetCurrentPointAction
  | ResetCurrentPointAction;

export const setCurrentPoint = (
  upcomingPoint: MapPoint
): SetCurrentPointAction => ({
  type: currentPointActionTypes.SET_CURRENT_POINT,
  payload: upcomingPoint,
});

export const resetCurrentPoint = (): ResetCurrentPointAction => ({
  type: currentPointActionTypes.RESET_CURRENT_POINT,
});
