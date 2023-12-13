import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { styled } from "@mui/material/styles";
import { AddPointButton } from "../components/AddPointButton";
import { useState } from "react";
import { AddPointSidebar } from "../components/AddPointSidebar";
import { makeStyles } from "@mui/styles";
import "leaflet/dist/leaflet.css";

const exampleCoords = {
  lat: 32.08,
  lon: 34.78,
};

const useStyles = makeStyles({
  fullHeight: {
    height: "100%",
  },
});

const TourMapWrapper = styled("div")({
  height: "100%",
  width: "100%",
});

export const ToursMap = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const classes = useStyles();
  return (
    <TourMapWrapper>
      <MapContainer
        center={[exampleCoords.lat, exampleCoords.lon]}
        zoom={13}
        scrollWheelZoom={true}
        className={classes.fullHeight}
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
      </MapContainer>
    </TourMapWrapper>
  );
};
