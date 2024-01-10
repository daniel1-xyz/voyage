import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
} from "redux";
import rootReducer from "./reducers/rootReducer";
import { thunk } from "redux-thunk";
import {
  initialState as pointsToDisplayInitialState,
  PointsToDisplayState,
} from "./reducers/pointsToDisplay";
import {
  initialState as currentSidebarInitialState,
  CurrentSidebarState,
} from "./reducers/currentSidebar";
import {
  initialState as currentPointInitialState,
  CurrentPointState,
} from "./reducers/currentPoint";

const enhancer = applyMiddleware(thunk);

export type RootState = {
  pointsToDisplay: PointsToDisplayState;
  currentSidebar: CurrentSidebarState;
  currentPoint: CurrentPointState;
};

const rootInitialState: RootState = {
  pointsToDisplay: pointsToDisplayInitialState,
  currentPoint: currentPointInitialState,
  currentSidebar: currentSidebarInitialState,
};

const store = createStore(rootReducer, rootInitialState, enhancer);

export type AppDispatch = typeof store.dispatch;

export default store;
