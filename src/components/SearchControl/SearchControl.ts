import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

const SearchControl = () => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = GeoSearchControl({
      provider,
      showMarker: false,
      showPopup: false,
      autoClose: true,
    });

    map.addControl(searchControl);
  }, [map]);

  return null;
};

export default SearchControl;
