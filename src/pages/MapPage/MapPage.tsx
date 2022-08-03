import { useEffect } from "react";
import Map from "../../components/Map/Map";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { getLocationsThunk } from "../../redux/thunks/locationsThunks";
import MapPageStyled from "./MapPageStyled";

const MapPage = (): JSX.Element => {
  const { name, tripId } = useAppSelector((state) => state.locations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (tripId) {
      localStorage.setItem("tripId", tripId);
    }
    const currentTripId = localStorage.getItem("tripId");
    dispatch(getLocationsThunk(currentTripId as string));
  }, [dispatch, tripId]);

  return (
    <MapPageStyled>
      <div className="page-content">
        <h1 className="trip-name">{name}</h1>
        <p className="page-description">
          Choose your favorite locations from the map and create your perfect
          trip!
        </p>
        <Map />
      </div>
    </MapPageStyled>
  );
};

export default MapPage;
