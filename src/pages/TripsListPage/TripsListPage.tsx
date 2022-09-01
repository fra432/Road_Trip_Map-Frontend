import { useEffect } from "react";
import TripsList from "../../components/TripsList/TripsList";
import { useAppSelector } from "../../redux/store/hooks";
import TripsListPageStyled from "./TripsListPageStyled";

const TripsListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { userTrips } = useAppSelector((state) => state.userTrips);

  return (
    <TripsListPageStyled>
      <h2 className="title">My Trips</h2>
      {userTrips.length === 0 ? (
        <>
          <p>You haven't created any trip yet.</p>
          <div className="redirect">
            <p>Move back to the</p>
            <a href="/home">Home Page</a>
            <p>and start planning a new jurney!</p>
          </div>
        </>
      ) : (
        <TripsList />
      )}
    </TripsListPageStyled>
  );
};

export default TripsListPage;
