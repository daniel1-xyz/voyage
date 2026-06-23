import { CurrentSidebarState } from "../reducers/currentSidebar";

export const currentSidebarActionTypes = {
  SET_CURRENT_SIDEBAR: "SET_CURRENT_SIDEBAR",
  RESET_CURRENT_SIDEBAR: "RESET_CURRENT_SIDEBAR",
};

export interface SetCurrentSidebarAction {
  type: typeof currentSidebarActionTypes.SET_CURRENT_SIDEBAR;
  payload: CurrentSidebarState["currentSidebar"];
}

export interface ResetCurrentSidebarAction {
  type: typeof currentSidebarActionTypes.RESET_CURRENT_SIDEBAR;
}

export type CurrentSidebarAction =
  | SetCurrentSidebarAction
  | ResetCurrentSidebarAction;
