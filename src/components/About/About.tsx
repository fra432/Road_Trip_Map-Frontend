import AboutStyled from "./AboutStyled";
import { HiLocationMarker } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation();

  return (
    <AboutStyled>
      <div className="about-head">
        <div className="about-head__section">
          <HiLocationMarker size={40} className="about-head__section__icon" />
          <h4 className="about-head__section__title">
            Plan multi-stops routes
          </h4>
          <p className="about-head__section__description">
            Easily plan your trip itinerary on an interactive map. Choose a spot
            on the map and add a location to your trip
          </p>
        </div>
        <div className="about-head__section">
          <HiLocationMarker size={40} className="about-head__section__icon" />
          <h4 className="about-head__section__title">Share your itineraries</h4>
          <p className="about-head__section__description">
            Create your trips and share them with your friends.
          </p>
        </div>
        <div className="about-head__section">
          <HiLocationMarker size={40} className="about-head__section__icon" />
          <h4 className="about-head__section__title">
            Bring with you your memories
          </h4>
          <p className="about-head__section__description">
            Add photos and descriptions to your favorite locations and always
            bring with you the best memories of your trip
          </p>
        </div>
      </div>
      {pathname === "/home" && (
        <div className="about-main">
          <div className="about-main__description">
            <h2 className="about-main__description__title">
              Discover Inspiring Routes
            </h2>
            <p className="about-main__description__description">
              Explore the best selection of road trips from other users. Get
              inspired and start creating your own planning.
            </p>
          </div>
          <div className="about-main__image">
            <img src="/images/trippy-discover.jpeg" alt="trips cards" />
          </div>
        </div>
      )}
    </AboutStyled>
  );
};

export default About;
