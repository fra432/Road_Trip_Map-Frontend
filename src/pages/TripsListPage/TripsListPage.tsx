import { useEffect } from "react";
import TripsList from "../../components/TripsList/TripsList";
import TripsListPageStyled from "./TripsListPageStyled";

const TripsListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <TripsListPageStyled>
      <h2 className="title">My Trips</h2>
      <TripsList />
    </TripsListPageStyled>
  );
};

export default TripsListPage;
