import { MapPoint } from "../../types/point";

export const SET_CURRENT_POINT = "SET_CURRENT_POINT";
export const RESET_CURRENT_POINT = "RESET_CURRENT_POINT";

export interface SetCurrentPoint {
  type: string;
  payload: MapPoint;
}

export interface ResetCurrentPoint {
  type: string;
}

export type CurrentPointAction = SetCurrentPoint | ResetCurrentPoint;
