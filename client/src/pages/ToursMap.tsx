import { MapContainer, TileLayer, Circle } from "react-leaflet";
import { styled } from "@mui/material/styles";
import { AddPointButton } from "../components/AddPointButton";
import { useEffect } from "react";
import { AddPointSidebar } from "../components/AddPointSidebar/AddPointSidebar";
import "leaflet/dist/leaflet.css";
import sidebarCodes from "../redux/constants/sidebarCodes";
import { PointType } from "../types/pointTypes";
import { DisplayPointSidebar } from "../components/DisplayPointSidebar/DisplayPointSidebar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setCurrentSidebar } from "../redux/actions/currentSidebar";
import fetchPointsToDisplay from "../redux/actions/asyncActions/fetchPointsToDisplay";
import { setCurrentPoint } from "../redux/actions/currentPoint";
import { MapPoint } from "../types/point";

const CIRCLE_RADIUS = 50;
const CIRCLE_OPACITY = 50;

const exampleCoords = {
  lat: 32.08,
  lon: 34.78,
};

const TourMapWrapper = styled("div")({
  height: "100%",
  width: "100%",
  direction: "rtl",
});

const FullMapContainer = styled(MapContainer)({
  height: "100%",
  width: "100%",
});

const getColorByPointType = (pointType: PointType | "") => {
  switch (pointType) {
    case "אטרקציה":
      return "#48f";
    case "מסלול טיול":
      return "#4f8";
    case "תצפית נוף":
      return "#f84";
    default:
      return;
  }
};

export const ToursMap = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentSidebar = useSelector(
    (state: RootState) => state.currentSidebar.currentSidebar
  );
  const currentPoint = useSelector(
    (state: RootState) => state.currentPoint.currentPoint
  );
  const pointsToDisplay = useSelector(
    (state: RootState) => state.pointsToDisplay.pointsToDisplay
  );

  useEffect(() => {
    dispatch(fetchPointsToDisplay());
  }, [dispatch]);

  const openAddSidebar = () => {
    dispatch(setCurrentSidebar(sidebarCodes.ADD_SIDEBAR));
  };

  const openDisplaySidebar = (sidebarPointToDisplay: MapPoint) => {
    dispatch(setCurrentPoint(sidebarPointToDisplay));
    dispatch(setCurrentSidebar(sidebarCodes.DISPLAY_SIDEBAR));
  };

  const closeSidebar = () => {
    dispatch(setCurrentSidebar(sidebarCodes.NO_SIDEBAR));
  };

  return (
    <TourMapWrapper>
      <FullMapContainer
        center={[exampleCoords.lat, exampleCoords.lon]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pointsToDisplay?.map((point) => (
          <Circle
            radius={CIRCLE_RADIUS}
            center={[point.latitude, point.longitude]}
            color={getColorByPointType(point.pointType)}
            fillOpacity={CIRCLE_OPACITY}
            key={point.id}
            eventHandlers={{
              click: (e) => {
                const newCurrentPoint: MapPoint | undefined =
                  pointsToDisplay.find(
                    (pointToDisplay) => pointToDisplay.id === point.id
                  );
                newCurrentPoint && openDisplaySidebar(newCurrentPoint);
                e.originalEvent.stopPropagation();
              },
            }}
          />
        ))}
        {/* If Add Sidebar isn't open */}
        {!(currentSidebar === sidebarCodes.ADD_SIDEBAR) && (
          <AddPointButton openAddSidebar={openAddSidebar} />
        )}
        <AddPointSidebar
          isSidebarOpen={currentSidebar === sidebarCodes.ADD_SIDEBAR}
          closeSidebar={closeSidebar}
        />
        <DisplayPointSidebar
          currentPoint={currentPoint}
          isSidebarOpen={currentSidebar === sidebarCodes.DISPLAY_SIDEBAR}
          closeSidebar={closeSidebar}
        />
      </FullMapContainer>
    </TourMapWrapper>
  );
};
