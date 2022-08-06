import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import Map from "../../components/Map/Map";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { getLocationsThunk } from "../../redux/thunks/locationsThunks";
import MapPageStyled from "./MapPageStyled";

const MapPage = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.locations);
  const dispatch = useAppDispatch();

  const { tripId } = useParams();

  useLayoutEffect(() => {
    dispatch(getLocationsThunk(tripId as string));
  }, [dispatch, tripId]);

  return (
    <MapPageStyled>
      <div className="page-content">
        <h1 className="trip-name">{name}</h1>
        <Map />
      </div>
    </MapPageStyled>
  );
};

export default MapPage;
