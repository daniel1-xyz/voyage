import { State } from "../store";

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

export const setCurrentSidebar = (
  upcomingSidebarCode: State["currentSidebar"]
): SetCurrentSidebarAction => ({
  type: currentSidebarActionTypes.SET_CURRENT_SIDEBAR,
  payload: upcomingSidebarCode,
});

export const resetCurrentSidebar = (): ResetCurrentSidebarAction => ({
  type: currentSidebarActionTypes.RESET_CURRENT_SIDEBAR,
});
