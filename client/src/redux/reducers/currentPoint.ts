import {
  currentPointActionTypes,
  CurrentPointAction,
  SetCurrentPointAction,
} from "../actions/currentPoint";
import { defaultState, RootState } from "../store";

export const currentPointReducer = (
  state: RootState,
  action: CurrentPointAction
): RootState => {
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
