import { useEffect, useState } from "react";
import L, { Icon } from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";

interface LatLng {
  lat: number;
  lng: number;
}

const UserLocationMarker = () => {
  const [position, setPosition] = useState<LatLng>({ lat: 0, lng: 0 });
  const [bbox, setBbox] = useState<string[]>([]);

  const marker = new Icon({
    iconUrl: "/location.png",
    iconSize: [40, 40],
  });

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (event) {
      setPosition(event.latlng);
      map.flyTo(event.latlng, map.getZoom());
      const radius = event.accuracy;
      const circle = L.circle(event.latlng, radius);
      circle.addTo(map);
      setBbox(event.bounds.toBBoxString().split(","));
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={marker}>
      <Popup>
        You are here. <br />
        Map bbox: <br />
        <b>Southwest lng</b>: {bbox[0]} <br />
        <b>Southwest lat</b>: {bbox[1]} <br />
        <b>Northeast lng</b>: {bbox[2]} <br />
        <b>Northeast lat</b>: {bbox[3]}
      </Popup>
    </Marker>
  );
};

export default UserLocationMarker;
