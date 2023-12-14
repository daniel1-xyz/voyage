import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { styled } from "@mui/material/styles";
import { AddPointButton } from "../components/AddPointButton";
import { useState } from "react";
import { AddPointSidebar } from "../components/AddPointSidebar/AddPointSidebar";
import "leaflet/dist/leaflet.css";

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

export const ToursMap = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
        <Marker position={[exampleCoords.lat, exampleCoords.lon]}>
          <Popup>
            A pretty CSS5 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
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
