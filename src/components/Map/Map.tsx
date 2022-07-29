import { Icon } from "leaflet";
import { GiCancel } from "react-icons/gi";
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
import {
  deleteLocationThunk,
  getLocationByIdThunk,
} from "../../redux/thunks/locationsThunks";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const NewMarker = () => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        dispatch(addCoordinatesActionCreator([lat, lng]));
        dispatch(openLocationFormActionCreator());
      },
    });
    return null;
  };

  const marker = new Icon({
    iconUrl: "/location.png",
    iconSize: [40, 40],
  });

  const deleteLocation = async (event: any, id: string) => {
    event.stopPropagation();
    dispatch(deleteLocationThunk(id));
    handleClose();
  };

  const openInfoLocationModal = (event: any, id: string) => {
    event.stopPropagation();
    dispatch(getLocationByIdThunk(id));
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
          );
        })}
        <SearchControl />
        <NewMarker />
      </MapContainer>
    </MapStyled>
  );
};

export default Map;
