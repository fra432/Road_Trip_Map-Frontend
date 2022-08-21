import { Icon } from "leaflet";
import * as L from "leaflet";
import { BsInfoCircleFill } from "react-icons/bs";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import MapStyled from "./MapStyled";
import SearchControl from "../SearchControl/SearchControl";

import { getLocationByIdThunk } from "../../redux/thunks/locationsThunks";
import MapMarker from "../MapMarker/MapMarker";

const StyledPop = styled(Popup)`
  .popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Map = () => {
  const locations = useAppSelector((state) => state.locations);
  const dispatch = useAppDispatch();

  const marker = new Icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -60],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  });

  const coordinatesList = locations.features.map(
    (location) =>
      new L.LatLng(
        location.geometry.coordinates[0],
        location.geometry.coordinates[1]
      )
  );

  const pointsList = coordinatesList.sort(function (a, b) {
    if (a.lng === b.lng) {
      return a.lat - b.lat;
    }
    return a.lat - b.lat;
  });

  const openInfoLocationModal = (event: any, id: string) => {
    event.stopPropagation();
    dispatch(getLocationByIdThunk(id));
  };

  return (
    <MapStyled>
      <MapContainer
        center={
          locations.features.length
            ? [
                locations.features[0].geometry.coordinates[0],
                locations.features[0].geometry.coordinates[1],
              ]
            : [41.346176, 2.168365]
        }
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.features.map((location) => {
          return (
            <>
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
                    {location.properties.images.length !== 0 && (
                      <img
                        className="image"
                        src={location.properties.images[0]}
                        alt={location.properties.name}
                      />
                    )}
                  </div>

                  <BsInfoCircleFill
                    size={35}
                    className="icon icon--info"
                    onClick={(event) => {
                      openInfoLocationModal(event, location.id);
                    }}
                  />
                </StyledPop>
              </Marker>
              <Polyline positions={pointsList} color="blue" />
            </>
          );
        })}
        <SearchControl />
        <MapMarker />
      </MapContainer>
    </MapStyled>
  );
};

export default Map;
