import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";

function App() {
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
      </MapContainer>
      );
    </>
  );
}

export default App;
