import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const positionForExample = [32, 34.8];

const TourMapWrapper = styled.div`
  height: 100vh,
  width: 100%
`;

export const TourMap = () => {
  return (
    <>
      <MapContainer
        center={positionForExample}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionForExample}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
