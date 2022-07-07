import L, { Icon } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import styled from "styled-components";
import locations from "../../data/locations";
import MapStyled from "./MapStyled";

const StyledPop = styled(Popup)`
  .popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Map = () => {
  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { icon: marker }).addTo(map);
      },
    });
    return null;
  }

  const marker = new Icon({
    iconUrl: "/location.png",
    iconSize: [40, 40],
  });

  return (
    <MapStyled>
      <MapContainer
        center={[41.346176, 2.168365]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.features.map((location) => {
          return (
            <Marker
              key={location.id}
              position={[
                location.geometry.coordinates[0],
                location.geometry.coordinates[1],
              ]}
              icon={marker}
            >
              <StyledPop
                position={[
                  location.geometry.coordinates[0],
                  location.geometry.coordinates[1],
                ]}
              >
                <div className="popup-content">
                  <h2>{location.properties.name}</h2>
                  <p>{location.properties.description}</p>
                  <img
                    className="image"
                    height="100px"
                    width="100px"
                    src={location.properties.image}
                    alt={location.properties.name}
                  />
                </div>
              </StyledPop>
            </Marker>
          );
        })}
        <MyComponent />
      </MapContainer>
    </MapStyled>
  );
};

export default Map;
