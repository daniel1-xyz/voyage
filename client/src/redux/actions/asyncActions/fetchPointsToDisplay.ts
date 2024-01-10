import { getAllPoints } from "../../../services/pointServices";
import { fetchPointsFailure, fetchPointsSuccess } from "../pointsToDisplay";
import { AppDispatch, RootState } from "../../store";

const fetchPointsToDisplay = async () => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    try {
      const response = await getAllPoints();
      dispatch(fetchPointsSuccess(response?.data));
    } catch (error) {
      dispatch(fetchPointsFailure(error as Error));
    }
  };
};

export default fetchPointsToDisplay;
