import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import locations from "./data/locations";
import { Icon } from "leaflet";

function App() {
  const marker = new Icon({
    iconUrl: "/location.png",
    iconSize: [40, 40],
  });

  return (
    <>
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
              key={location.properties.LOCATION_ID}
              position={[
                location.geometry.coordinates[0],
                location.geometry.coordinates[1],
              ]}
              icon={marker}
            >
              <Popup
                position={[
                  location.geometry.coordinates[0],
                  location.geometry.coordinates[1],
                ]}
              >
                <div>
                  <h2>{location.properties.NAME}</h2>
                  <p>{location.properties.DESCRIPTIO}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      );
    </>
  );
}

export default App;
