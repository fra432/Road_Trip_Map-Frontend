import { useEffect } from "react";
import Map from "../../components/Map/Map";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { getLocationThunk } from "../../redux/thunks/locationsThunks";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const {
    userInfo: { username, id },
  } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocationThunk(id));
  }, [dispatch, id]);

  return (
    <HomePageStyled>
      <header>
        <img src="trippy_logo.webp" alt="trippy logo" className="logo" />
      </header>
      <div className="welcome">
        <span className="welcome__username">Welcome {username}</span>
        <p className="welcome__description">
          Choose your favorite locations from the map and plan your perfect
          trip!
        </p>
      </div>
      <Map />
    </HomePageStyled>
  );
};

export default HomePage;
