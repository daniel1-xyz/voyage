import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { styled } from "@mui/material/styles";
import { AddPointButton } from "../components/AddPointButton";
import { useEffect, useState } from "react";
import { AddPointSidebar } from "../components/AddPointSidebar/AddPointSidebar";
import "leaflet/dist/leaflet.css";
import { getAllPoints } from "../services/pointServices";
import { Point } from "../types/point";
import { PointType } from "../types/pointTypes";

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
      return "blue";
    case "מסלול טיול":
      return "#4f4";
    case "תצפית נוף":
      return "red";
    default:
      return;
  }
};

export const ToursMap = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pointsToDisplay, setPointsToDisplay] = useState<
    Array<Point> | undefined
  >(undefined);

  useEffect(() => {
    const AwaitPointsToDisplay = async () => {
      const points = await getAllPoints();
      setPointsToDisplay(points ? points.data : undefined);
    };
    AwaitPointsToDisplay();
  });

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
        {pointsToDisplay?.map((point, index) => (
          <Circle
            radius={CIRCLE_RADIUS}
            center={[point.latitude, point.longitude]}
            color={getColorByPointType(point.pointType)}
            fillOpacity={CIRCLE_OPACITY}
            key={index}
          ></Circle>
        ))}
        {!isSidebarOpen && (
          <AddPointButton setIsSidebarOpen={setIsSidebarOpen} />
        )}
        <AddPointSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </FullMapContainer>
    </TourMapWrapper>
  );
};
