import {
  CurrentSidebarAction,
  SetCurrentSidebarAction,
  currentSidebarActionTypes,
} from "../constants/currentSidebar";
import sidebarCodes from "../constants/sidebarCodes";
import State from "../constants/stateInterface";

export interface CurrentSidebarState {
  currentSidebar: string;
}

const initialState: CurrentSidebarState = {
  currentSidebar: sidebarCodes.NO_SIDEBAR,
};

export const currentSidebarReducer = (
  state: CurrentSidebarState = initialState,
  action: CurrentSidebarAction
): State["currentSidebar"] => {
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
