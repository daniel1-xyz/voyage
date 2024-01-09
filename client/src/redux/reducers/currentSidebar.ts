import { currentPointActionTypes } from "../actions/currentPoint";
import {
  CurrentSidebarAction,
  SetCurrentSidebarAction,
} from "../actions/currentSidebar";
import { defaultState, RootState } from "../store";

export const currentSidebarReducer = (
  state: RootState,
  action: CurrentSidebarAction
): RootState => {
  switch (action.type) {
    case currentPointActionTypes.SET_CURRENT_POINT:
      return {
        ...state,
        currentSidebar: (action as SetCurrentSidebarAction).payload,
      };
    case currentPointActionTypes.RESET_CURRENT_POINT:
      return {
        ...state,
        currentSidebar: defaultState.CURRENT_SIDEBAR,
      };
    default:
      return state;
  }
};
