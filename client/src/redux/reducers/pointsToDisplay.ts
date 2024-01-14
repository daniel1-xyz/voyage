import { MapPoint } from "../../types/point";
import {
  FetchPointsAction,
  FetchPointsFailureAction,
  FetchPointsSuccessAction,
  pointsToDisplayActionTypes,
} from "../constants/pointsToDisplay";
import { RootState } from "../store";

export interface PointsToDisplayState {
  pointsToDisplay: Array<MapPoint>;
}

export const initialState: PointsToDisplayState = {
  pointsToDisplay: [],
};

export const pointsToDisplayReducer = (
  state: PointsToDisplayState = initialState,
  action: FetchPointsAction
): RootState["pointsToDisplay"] => {
  switch (action.type) {
    case pointsToDisplayActionTypes.FETCH_POINTS_SUCCESS:
      return {
        ...state,
        pointsToDisplay: (action as FetchPointsSuccessAction).payload,
      };
    case pointsToDisplayActionTypes.FETCH_POINT_FAILURE:
      return { ...state, pointsToDisplay: initialState.pointsToDisplay };
    default:
      return state;
  }
};
