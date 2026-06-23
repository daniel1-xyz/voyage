import {
  CurrentSidebarAction,
  SetCurrentSidebarAction,
  currentSidebarActionTypes,
} from "../constants/currentSidebar";
import { sidebarCodes, SidebarCodeType } from "../constants/sidebarCodes";
import { RootState } from "../store";

export interface CurrentSidebarState {
  currentSidebar: SidebarCodeType;
}

export const initialState: CurrentSidebarState = {
  currentSidebar: sidebarCodes.NO_SIDEBAR,
};

export const currentSidebarReducer = (
  state: CurrentSidebarState = initialState,
  action: CurrentSidebarAction
): RootState["currentSidebar"] => {
  switch (action.type) {
    case currentSidebarActionTypes.SET_CURRENT_SIDEBAR:
      return {
        ...state,
        currentSidebar: (action as SetCurrentSidebarAction).payload,
      };
    case currentSidebarActionTypes.RESET_CURRENT_SIDEBAR:
      return { ...state, currentSidebar: initialState.currentSidebar };
    default:
      return state;
  }
};
