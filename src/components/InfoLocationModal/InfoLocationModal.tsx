import Carousel from "better-react-carousel";
import InfoLocationModalStyled from "./InfoLocationModalStyled";

const InfoLocationModal = (infoId: string) => {
  return (
    <InfoLocationModalStyled>
      <div className="location">
        <h1 className="location__name">HOLA</h1>
        <p className="location__description">Description</p>
        <Carousel cols={5} rows={1} gap={10} loop></Carousel>
        <button>Close</button>
      </div>
    </InfoLocationModalStyled>
  );
};

export default InfoLocationModal;
