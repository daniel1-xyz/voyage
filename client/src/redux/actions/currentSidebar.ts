export const currentSidebarActionTypes = {
  SET_CURRENT_SIDEBAR: "SET_CURRENT_SIDEBAR",
  RESET_CURRENT_SIDEBAR: "RESET_CURRENT_SIDEBAR",
};

export interface SetCurrentSidebarAction {
  type: string;
  payload: string;
}

export interface ResetCurrentSidebarAction {
  type: string;
}

export type CurrentSidebarAction =
  | SetCurrentSidebarAction
  | ResetCurrentSidebarAction;

export const setCurrentSidebar = (
  upcomingSidebarCode: string
): SetCurrentSidebarAction => ({
  type: currentSidebarActionTypes.SET_CURRENT_SIDEBAR,
  payload: upcomingSidebarCode,
});

export const resetCurrentSidebar = (): ResetCurrentSidebarAction => ({
  type: currentSidebarActionTypes.RESET_CURRENT_SIDEBAR,
});
