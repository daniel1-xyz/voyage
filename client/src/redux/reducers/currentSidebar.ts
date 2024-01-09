import {
  CurrentSidebarAction,
  SetCurrentSidebarAction,
  currentSidebarActionTypes,
} from "../actions/currentSidebar";
import { defaultState, State } from "../store";

export const currentSidebarReducer = (
  state: State["currentSidebar"],
  action: CurrentSidebarAction
): State["currentSidebar"] => {
  switch (action.type) {
    case currentSidebarActionTypes.SET_CURRENT_SIDEBAR:
      return (action as SetCurrentSidebarAction).payload;
    case currentSidebarActionTypes.RESET_CURRENT_SIDEBAR:
      return defaultState.CURRENT_SIDEBAR;
    default:
      return state;
  }
};
