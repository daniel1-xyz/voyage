import { getAllPoints } from "../../../services/pointServices";
import { fetchPointsFailure, fetchPointsSuccess } from "../pointsToDisplay";
import { AppAction, RootState } from "../../store";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

const fetchPointsToDisplay = (): ThunkAction<
  void,
  RootState,
  unknown,
  AppAction
> => {
  console.log("tst1");
  return async (dispatch) => {
    console.log("tst2");
    try {
      const response = await getAllPoints();
      dispatch(fetchPointsSuccess(response?.data));
      console.log("tst3");
    } catch (error) {
      dispatch(fetchPointsFailure(error as Error));
    }
  };
};

export default fetchPointsToDisplay;
