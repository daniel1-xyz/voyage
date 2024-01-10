import { MapPoint } from "../../types/point";

export const currentPointActionTypes = {
  SET_CURRENT_POINT: "SET_CURRENT_POINT",
  RESET_CURRENT_POINT: "RESET_CURRENT_POINT",
};

export interface SetCurrentPointAction {
  type: typeof currentPointActionTypes.SET_CURRENT_POINT;
  payload: MapPoint;
}

export interface ResetCurrentPointAction {
  type: typeof currentPointActionTypes.RESET_CURRENT_POINT;
}

export type CurrentPointAction =
  | SetCurrentPointAction
  | ResetCurrentPointAction;
