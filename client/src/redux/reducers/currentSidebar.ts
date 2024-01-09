import {
  CurrentSidebarAction,
  SetCurrentSidebarAction,
  currentSidebarActionTypes,
} from "../actions/currentSidebar";
import { defaultState, RootState } from "../store";

export const currentSidebarReducer = (
  state: RootState,
  action: CurrentSidebarAction
): RootState => {
  switch (action.type) {
    case currentSidebarActionTypes.SET_CURRENT_SIDEBAR:
      return {
        ...state,
        currentSidebar: (action as SetCurrentSidebarAction).payload,
      };
    case currentSidebarActionTypes.RESET_CURRENT_SIDEBAR:
      return {
        ...state,
        currentSidebar: defaultState.CURRENT_SIDEBAR,
      };
    default:
      return state;
  }
};
