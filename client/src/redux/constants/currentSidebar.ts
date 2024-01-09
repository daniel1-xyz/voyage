import State from "./stateInterface";

export const currentSidebarActionTypes = {
  SET_CURRENT_SIDEBAR: "SET_CURRENT_SIDEBAR",
  RESET_CURRENT_SIDEBAR: "RESET_CURRENT_SIDEBAR",
};

export interface SetCurrentSidebarAction {
  type: string;
  payload: State["currentSidebar"];
}

export interface ResetCurrentSidebarAction {
  type: string;
}

export type CurrentSidebarAction =
  | SetCurrentSidebarAction
  | ResetCurrentSidebarAction;
