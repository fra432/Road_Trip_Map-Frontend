import TripStyled from "./TripStyled";

const Trip = ({
  trip: { name, image },
}: {
  trip: { name: string; image: string };
}) => {
  return (
    <TripStyled>
      <img src={image} alt="card cover" />
      <div className="info">
        <h4 className="name">{name}</h4>
      </div>
    </TripStyled>
  );
};

export default Trip;