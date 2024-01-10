import State from "../constants/stateInterface";
import {
  SetCurrentSidebarAction,
  ResetCurrentSidebarAction,
  currentSidebarActionTypes,
} from "../constants/currentSidebar";
import { CurrentSidebarState } from "../reducers/currentSidebar";

export const setCurrentSidebar = (
  upcomingSidebarCode: CurrentSidebarState["currentSidebar"]
): SetCurrentSidebarAction => ({
  type: currentSidebarActionTypes.SET_CURRENT_SIDEBAR,
  payload: upcomingSidebarCode,
});

export const resetCurrentSidebar = (): ResetCurrentSidebarAction => ({
  type: currentSidebarActionTypes.RESET_CURRENT_SIDEBAR,
});
