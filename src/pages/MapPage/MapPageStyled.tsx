import styled from "styled-components";

const MapPageStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-image: url("/images/travel-planner.jpeg");
  background-size: cover;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: #5c5a58;
    opacity: 0.5;
  }

  .page-content {
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .trip-name {
      font-family: "Lobster", cursive;
      color: #fff;
      font-size: 3rem;
    }

    .page-description {
      color: #fff;
      text-align: center;
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
      font-style: italic;
    }
  }
`;

export default MapPageStyled;
