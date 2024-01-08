import { MapPoint } from "../../types/point";
import {
  SET_CURRENT_POINT,
  RESET_CURRENT_POINT,
  SetCurrentPoint,
} from "./actionTypes";

export const setCurrentPoint = (upcomingPoint: MapPoint): SetCurrentPoint => ({
  type: SET_CURRENT_POINT,
  payload: upcomingPoint,
});

export const resetCurrentPoint = () => ({
  type: RESET_CURRENT_POINT,
});
