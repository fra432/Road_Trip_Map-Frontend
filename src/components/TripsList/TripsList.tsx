import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import TripsListStyled from "./TripsListStyled";
import Trip from "../Trip/Trip";
import { useLayoutEffect } from "react";
import { getUserTripsThunk } from "../../redux/thunks/tripsThunks";

const TripsList = () => {
  const { userTrips } = useAppSelector((state) => state.userTrips);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(getUserTripsThunk());
  }, [dispatch]);

  return (
    <TripsListStyled>
      {userTrips.map((trip) => {
        return <Trip key={trip.id as string} trip={trip} />;
      })}
    </TripsListStyled>
  );
};

export default TripsList;
