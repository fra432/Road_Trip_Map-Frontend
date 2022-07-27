import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import MapStyled from "./MapStyled";
import SearchControl from "../SearchControl/SearchControl";
import {
  addCoordinatesActionCreator,
  openLocationFormActionCreator,
} from "../../redux/features/newLocationSlice";
import { deleteLocationThunk } from "../../redux/thunks/locationsThunks";

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

  function MyComponent() {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        dispatch(addCoordinatesActionCreator([lat, lng]));
        dispatch(openLocationFormActionCreator());
      },
    });
    return null;
  }

  const marker = new Icon({
    iconUrl: "/location.png",
    iconSize: [40, 40],
  });

  const deleteLocation = async (event: any, id: string) => {
    event.stopPropagation();
    dispatch(deleteLocationThunk(id));
    debugger;
  };

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
                  {location.properties.images.length !== 0 && (
                    <img
                      className="image"
                      height="100px"
                      width="100px"
                      src={location.properties.images[0]}
                      alt={location.properties.name}
                    />
                  )}
                </div>
                <button
                  onClick={(event) => deleteLocation(event, location.id)}
                  className="button-delete"
                >
                  Delete
                </button>
              </StyledPop>
            </Marker>
          );
        })}
        <SearchControl />
        <MyComponent />
      </MapContainer>
    </MapStyled>
  );
};

export default Map;
