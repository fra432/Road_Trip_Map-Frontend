import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { getLocationsThunk } from "../../redux/thunks/locationsThunks";
import TripStyled from "./TripStyled";

const Trip = ({
  trip: { name, image, id },
}: {
  trip: { name: string; image: string; id: string };
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const showTrip = async (tripId: string) => {
    await dispatch(getLocationsThunk(tripId));
    navigate(`/map/${tripId}`);
  };
  return (
    <TripStyled onClick={() => showTrip(id)}>
      <img src={image ? image : "/images/background4.jpeg"} alt="card cover" />
      <div className="info">
        <h4 className="name">{name}</h4>
      </div>
    </TripStyled>
  );
};

export default Trip;
