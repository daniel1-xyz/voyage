import {
  SET_CURRENT_POINT,
  RESET_CURRENT_POINT,
  CurrentPointAction,
  SetCurrentPointAction,
} from "../actions/actionTypes";
import { DEFAULT_CURRENT_POINT, RootState } from "../store";

export const currentPointReducer = (
  state: RootState,
  action: CurrentPointAction
): RootState => {
  switch (action.type) {
    case SET_CURRENT_POINT:
      return {
        ...state,
        currentPoint: (action as SetCurrentPointAction).payload,
      };
    case RESET_CURRENT_POINT:
      return { ...state, currentPoint: DEFAULT_CURRENT_POINT };
    default:
      return state;
  }
};
