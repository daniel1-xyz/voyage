import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { thunk } from "redux-thunk";
import {
  initialState as pointsToDisplayInitialState,
  PointsToDisplayState,
} from "./reducers/pointsToDisplay";
import {
  initialState as filteredPointsToDisplayInitialState,
  FilteredPointsToDisplayState,
} from "./reducers/filteredPointsToDisplay";
import {
  initialState as currentSidebarInitialState,
  CurrentSidebarState,
} from "./reducers/currentSidebar";
import {
  initialState as currentPointInitialState,
  CurrentPointState,
} from "./reducers/currentPoint";
import { FetchPointsAction } from "./constants/pointsToDisplay";
import { CurrentPointAction } from "./constants/currentPoint";
import { CurrentSidebarAction } from "./constants/currentSidebar";
import { FilteredPointAction } from "./constants/filteredPointsToDisplay";

const enhancer = applyMiddleware(thunk);

export type RootState = {
  pointsToDisplay: PointsToDisplayState;
  filteredPointsToDisplay: FilteredPointsToDisplayState;
  currentSidebar: CurrentSidebarState;
  currentPoint: CurrentPointState;
};

const rootInitialState: RootState = {
  pointsToDisplay: pointsToDisplayInitialState,
  filteredPointsToDisplay: filteredPointsToDisplayInitialState,
  currentPoint: currentPointInitialState,
  currentSidebar: currentSidebarInitialState,
};

const store = createStore(rootReducer, rootInitialState, enhancer);

export type AppDispatch = typeof store.dispatch;

export type AppAction =
  | FetchPointsAction
  | CurrentPointAction
  | CurrentSidebarAction
  | FilteredPointAction;

export default store;
