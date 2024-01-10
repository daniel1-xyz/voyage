import { MapPoint } from "../../types/point";
import {
  currentPointActionTypes,
  CurrentPointAction,
  SetCurrentPointAction,
} from "../constants/currentPoint";
import defaultState from "../constants/defaultState";
import State from "../constants/stateInterface";

export interface CurrentPointState {
  currentPoint: MapPoint | undefined;
}

const initialState = {
  currentPoint: undefined,
};

export const currentPointReducer = (
  state: CurrentPointState = initialState,
  action: CurrentPointAction
): State["currentPoint"] => {
  switch (action.type) {
    case currentPointActionTypes.SET_CURRENT_POINT:
      return {
        ...state,
        currentPoint: (action as SetCurrentPointAction).payload,
      };
    case currentPointActionTypes.RESET_CURRENT_POINT:
      return { ...state, currentPoint: defaultState.CURRENT_POINT };
    default:
      return state;
  }
};
