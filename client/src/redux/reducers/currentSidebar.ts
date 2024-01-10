import { MapPoint } from "../../types/point";
import {
  CurrentSidebarAction,
  SetCurrentSidebarAction,
  currentSidebarActionTypes,
} from "../constants/currentSidebar";
import defaultState from "../constants/defaultState";
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
      return { ...state, currentSidebar: defaultState.CURRENT_SIDEBAR };
    default:
      return state;
  }
};
