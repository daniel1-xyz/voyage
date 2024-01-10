import { MapPoint } from "../../types/point";
import {
  currentPointActionTypes,
  CurrentPointAction,
  SetCurrentPointAction,
} from "../constants/currentPoint";
import { RootState } from "../store";

export interface CurrentPointState {
  currentPoint: MapPoint | undefined;
}

export const initialState = {
  currentPoint: undefined,
};

export const currentPointReducer = (
  state: CurrentPointState = initialState,
  action: CurrentPointAction
): RootState["currentPoint"] => {
  switch (action.type) {
    case currentPointActionTypes.SET_CURRENT_POINT:
      return {
        ...state,
        currentPoint: (action as SetCurrentPointAction).payload,
      };
    case currentPointActionTypes.RESET_CURRENT_POINT:
      return { ...state, currentPoint: initialState.currentPoint };
    default:
      return state;
  }
};
