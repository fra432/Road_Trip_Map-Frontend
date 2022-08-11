import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { openTripFormActionCreator } from "../../redux/features/userTripsSlice";
import { useAppDispatch } from "../../redux/store/hooks";
import { getUserTripsThunk } from "../../redux/thunks/tripsThunks";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const openTripForm = () => {
    dispatch(openTripFormActionCreator());
  };

  const showUserTrips = () => {
    dispatch(getUserTripsThunk());
    navigate("/my_trips");
  };

  return (
    <HomePageStyled>
      <div className="options">
        <div onClick={openTripForm} className="option option--create">
          <video
            src="/video/create-trip.mp4"
            className="option__video"
            loop
            muted
            autoPlay
          ></video>
          <span className="option__title">Create new Trip</span>
        </div>
        <div onClick={showUserTrips} className="option option--trips">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/trippy-dc13b.appspot.com/o/ezgif.com-gif-maker%20(1).webp?alt=media&token=b91245b1-1e8a-4f37-9ad9-43c3428566d4"
            alt="world spinning gif"
            className="option__image"
          />
          <span className="option__title">My Trips</span>
        </div>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
