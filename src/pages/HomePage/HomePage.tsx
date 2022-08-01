import { useAppSelector } from "../../redux/store/hooks";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const {
    userInfo: { username },
  } = useAppSelector((state) => state.user);

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
      <div className="user-options">
        <div className="option">
          <img
            src="https://tenor.com/view/what-the-location-map-gps-gif-11157749.gif"
            alt="path on the map"
            className="image image--map"
          />
          <button className="button button--create">Create New Trip</button>
        </div>
        <div className="option">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/trippy-dc13b.appspot.com/o/ezgif.com-gif-maker%20(1).webp?alt=media&token=b91245b1-1e8a-4f37-9ad9-43c3428566d4"
            alt="world spinning gif"
            className="image image--globe"
          />
          <button className="button button--create">My Trips</button>
        </div>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
