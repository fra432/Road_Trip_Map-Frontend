import styled from "styled-components";

const MapStyled = styled.div`
  width: 80%;
  z-index: 100;
  border: 2px solid #fff;
  margin-bottom: 2rem;

  .leaflet-container {
    height: 30rem;
  }

  .leaflet-popup-content-wrapper .leaflet-popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export default MapStyled;
