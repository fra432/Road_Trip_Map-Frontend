import TripsList from "../../components/TripsList/TripsList";
import TripsListPageStyled from "./TripsListPageStyled";

const TripsListPage = () => {
  return (
    <TripsListPageStyled>
      <h2 className="title">My Trips</h2>
      <TripsList />
    </TripsListPageStyled>
  );
};

export default TripsListPage;
