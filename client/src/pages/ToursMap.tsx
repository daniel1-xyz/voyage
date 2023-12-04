import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

const positionForExample = [32.08, 34.78];

const TourMapWrapper = styled.div`
  .full-height {
    height: 100%;
  }

  height: 100%;
  width: 100%;
`;

export const TourMap = () => {
  return (
    <TourMapWrapper>
      <MapContainer
        center={[positionForExample[0], positionForExample[1]]}
        zoom={13}
        scrollWheelZoom={true}
        className="full-height"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[positionForExample[0], positionForExample[1]]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </TourMapWrapper>
  );
};
