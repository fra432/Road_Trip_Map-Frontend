import AboutStyled from "./AboutStyled";
import { HiLocationMarker } from "react-icons/hi";

const About = () => {
  return (
    <AboutStyled>
      <div className="about-section">
        <HiLocationMarker size={40} className="about-section__icon" />
        <h4 className="about-section__title">Plan multi-stops routes</h4>
        <p className="about-section__description">
          Easily plan your trip itinerary on an interactive map. Choose a spot
          on the map and add a location to your trip
        </p>
      </div>
      <div className="about-section">
        <HiLocationMarker size={40} className="about-section__icon" />
        <h4 className="about-section__title">Share your itineraries</h4>
        <p className="about-section__description">
          Create your trips and share them with your friends.
        </p>
      </div>
      <div className="about-section">
        <HiLocationMarker size={40} className="about-section__icon" />
        <h4 className="about-section__title">Bring with you your memories</h4>
        <p className="about-section__description">
          Add photos and descriptions to your favorite locations and always
          bring with you the best memories of your trip
        </p>
      </div>
    </AboutStyled>
  );
};

export default About;
