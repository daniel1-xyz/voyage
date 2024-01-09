import { Dispatch } from "redux";
import { getAllPoints } from "../../../services/pointServices";
import State from "../../constants/stateInterface";

export const fetchPointsToDisplay = async () => {
  return async (dispatch: Dispatch, getState: State) => {
    const response = await getAllPoints();
    const pointsToDisplay: State["pointsToDisplay"] = response?.data;
  };
};
