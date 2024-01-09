import {
  currentPointActionTypes,
  CurrentPointAction,
  SetCurrentPointAction,
} from "../actions/actionTypes";
import { DEFAULT_CURRENT_POINT, RootState } from "../store";

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
      return { ...state, currentPoint: DEFAULT_CURRENT_POINT };
    default:
      return state;
  }
};
