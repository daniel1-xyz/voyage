import { MapPoint } from "../../types/point";
import {
  FetchPointsAction,
  FetchPointsFailureAction,
  FetchPointsSuccessAction,
  pointsToDisplayActionTypes,
} from "../constants/pointsToDisplay";
import State from "../constants/stateInterface";

export interface PointsToDisplayState {
  pointsToDisplay: Array<MapPoint>;
  error: Error | null;
}

const initialState: PointsToDisplayState = {
  pointsToDisplay: [],
  error: null,
};

export const pointsToDisplayReducer = (
  state: PointsToDisplayState = initialState,
  action: FetchPointsAction
): State["pointsToDisplay"] => {
  switch (action.type) {
    case pointsToDisplayActionTypes.FETCH_POINTS_SUCCESS:
      return {
        ...state,
        pointsToDisplay: (action as FetchPointsSuccessAction).payload,
      };
    case pointsToDisplayActionTypes.FETCH_POINT_FAILURE:
      return { ...state, error: (action as FetchPointsFailureAction).payload };
    default:
      return state;
  }
};
