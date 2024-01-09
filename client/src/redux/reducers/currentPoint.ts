import {
  currentPointActionTypes,
  CurrentPointAction,
  SetCurrentPointAction,
} from "../actions/currentPoint";
import { defaultState, State } from "../store";

export const currentPointReducer = (
  state: State["currentPoint"],
  action: CurrentPointAction
): State["currentPoint"] => {
  switch (action.type) {
    case currentPointActionTypes.SET_CURRENT_POINT:
      return (action as SetCurrentPointAction).payload;
    case currentPointActionTypes.RESET_CURRENT_POINT:
      return defaultState.CURRENT_POINT;
    default:
      return state;
  }
};
