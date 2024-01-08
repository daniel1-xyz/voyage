import { MapPoint } from "../../types/point";
import {
  SET_CURRENT_POINT,
  RESET_CURRENT_POINT,
  SetCurrentPointAction,
  ResetCurrentPointAction,
} from "./actionTypes";

export const setCurrentPoint = (
  upcomingPoint: MapPoint
): SetCurrentPointAction => ({
  type: SET_CURRENT_POINT,
  payload: upcomingPoint,
});

export const resetCurrentPoint = (): ResetCurrentPointAction => ({
  type: RESET_CURRENT_POINT,
});
