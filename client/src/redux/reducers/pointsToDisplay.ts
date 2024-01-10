import {
  FetchPointsAction,
  FetchPointsSuccessAction,
  pointsToDisplayActionTypes,
} from "../constants/pointsToDisplay";
import State from "../constants/stateInterface";

export const pointsToDisplayReducer = (
  state: State["pointsToDisplay"],
  action: FetchPointsAction
) => {
  switch (action.type) {
    case pointsToDisplayActionTypes.FETCH_POINTS_SUCCESS:
      return (action as FetchPointsSuccessAction).payload;
    case pointsToDisplayActionTypes.FETCH_POINT_FAILURE:
      return state;
    default:
      return state;
  }
};
