import { MapPoint } from "../../types/point";
import {
  SetCurrentPointAction,
  ResetCurrentPointAction,
  currentPointActionTypes,
} from "../constants/currentPoint";

export const setCurrentPoint = (
  upcomingPoint: MapPoint
): SetCurrentPointAction => ({
  type: currentPointActionTypes.SET_CURRENT_POINT,
  payload: upcomingPoint,
});

export const resetCurrentPoint = (): ResetCurrentPointAction => ({
  type: currentPointActionTypes.RESET_CURRENT_POINT,
});
