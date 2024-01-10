import { Dispatch } from "redux";
import { getAllPoints } from "../../../services/pointServices";
import State from "../../constants/stateInterface";
import { fetchPointsFailure, fetchPointsSuccess } from "../pointsToDisplay";
import { Action } from "redux";

const fetchPointsToDisplay = async () => {
  return async (dispatch: Dispatch, getState: State) => {
    try {
      const response = await getAllPoints();
      dispatch(fetchPointsSuccess(response?.data) as Action);
    } catch (error) {
      dispatch(fetchPointsFailure(error as Error) as Action);
    }
  };
};

export default fetchPointsToDisplay;
