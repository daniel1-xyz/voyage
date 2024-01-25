import { getAllPoints } from "../../../services/pointServices";
import { fetchPointsFailure, fetchPointsSuccess } from "../pointsToDisplay";
import { AppAction, RootState } from "../../store";
import { ThunkAction } from "redux-thunk";
import { setFilteredPointsToDisplay } from "../filteredPointsToDisplay";

export const fetchPointsToDisplay = (): ThunkAction<
  void,
  RootState,
  unknown,
  AppAction
> => {
  return async (dispatch) => {
    try {
      const response = await getAllPoints();
      dispatch(fetchPointsSuccess(response?.data));
      dispatch(setFilteredPointsToDisplay(response?.data));
    } catch (error) {
      dispatch(fetchPointsFailure(error as Error));
    }
  };
};
