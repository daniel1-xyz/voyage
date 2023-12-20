import { MapContainer, TileLayer, Circle } from "react-leaflet";
import { styled } from "@mui/material/styles";
import { AddPointButton } from "../components/AddPointButton";
import { useEffect, useState } from "react";
import { AddPointSidebar } from "../components/AddPointSidebar/AddPointSidebar";
import "leaflet/dist/leaflet.css";
import { getAllPoints } from "../services/pointServices";
import { Point } from "../types/point";
import { PointType } from "../types/pointTypes";
import { DisplayPointSidebar } from "../components/DisplayPointSidebar/DisplayPointSidebar";

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
      return "#8f4";
    case "תצפית נוף":
      return "#f84";
    default:
      return;
  }
};

export const ToursMap = () => {
  const [isAddSidebarOpen, setIsAddSidebarOpen] = useState(false);
  const [isDisplaySidebarOpen, setIsDisplaySidebarOpen] = useState(false);
  const [isClosable, setIsClosable] = useState(true);
  const [displaySidebarId, setDisplaySidebarId] = useState("");
  const [pointsToDisplay, setPointsToDisplay] = useState<
    Array<Point> | undefined
  >(undefined);

  useEffect(() => {
    const getPointsToDisplay = async () => {
      const points = await getAllPoints();
      setPointsToDisplay(points ? points.data : undefined);
    };
    getPointsToDisplay();
  });

  const openAddSidebar = () => {
    setIsDisplaySidebarOpen(false);
    setDisplaySidebarId("");
    setIsAddSidebarOpen(true);
  };

  const closeAddSidebar = () => {
    setIsAddSidebarOpen(false);
  };

  const openDisplaySidebar = (pointId: string) => {
    setIsAddSidebarOpen(false);
    setIsDisplaySidebarOpen(true);
    setDisplaySidebarId(pointId);
  };

  const closeDisplaySidebar = () => {
    isClosable
      ? (setIsDisplaySidebarOpen(false), setDisplaySidebarId(""))
      : setIsClosable(true);
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
                // I know it's really bad but I have no Idea what should I do instead
                setTimeout(() => openDisplaySidebar(String(point.id)));
                setIsClosable(false);
              },
            }}
          />
        ))}
        {!isAddSidebarOpen && (
          <AddPointButton openAddSidebar={openAddSidebar} />
        )}
        <AddPointSidebar
          isSidebarOpen={isAddSidebarOpen}
          closeSidebar={closeAddSidebar}
        />
        <DisplayPointSidebar
          pointId={displaySidebarId}
          isSidebarOpen={isDisplaySidebarOpen}
          closeSidebar={closeDisplaySidebar}
        />
      </FullMapContainer>
    </TourMapWrapper>
  );
};
