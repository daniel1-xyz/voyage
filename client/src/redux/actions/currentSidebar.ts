import State from "../constants/stateInterface";
import {
  SetCurrentSidebarAction,
  ResetCurrentSidebarAction,
  currentSidebarActionTypes,
} from "../constants/currentSidebar";

export const setCurrentSidebar = (
  upcomingSidebarCode: State["currentSidebar"]
): SetCurrentSidebarAction => ({
  type: currentSidebarActionTypes.SET_CURRENT_SIDEBAR,
  payload: upcomingSidebarCode,
});

export const resetCurrentSidebar = (): ResetCurrentSidebarAction => ({
  type: currentSidebarActionTypes.RESET_CURRENT_SIDEBAR,
});
