import { getAllPoints } from "../../../services/pointServices";
import State from "../../constants/stateInterface";
import { fetchPointsFailure, fetchPointsSuccess } from "../pointsToDisplay";
import { Action } from "redux";
import { AppDispatch } from "../../store";

const fetchPointsToDisplay = async () => {
  return async (dispatch: AppDispatch, getState: State) => {
    try {
      const response = await getAllPoints();
      dispatch(fetchPointsSuccess(response?.data));
    } catch (error) {
      dispatch(fetchPointsFailure(error as Error));
    }
  };
};

export default fetchPointsToDisplay;
