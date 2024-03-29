import styled from "styled-components";

const MapStyled = styled.div`
  width: 80%;
  z-index: 100;
  border: 2px solid #fff;
  border-radius: 2rem;
  margin-bottom: 2rem;
  border: 2px solid #264653;

  .leaflet-container {
    height: 30rem;
    border-radius: 1.9rem;
  }

  .leaflet-popup {
    .leaflet-popup-content-wrapper .leaflet-popup-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 100%;

      h2 {
        text-align: center;
      }

      p {
        text-align: center;
        margin-top: -0.1rem;
        font-weight: 500;
      }

      img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 5rem;
        border: 2px solid #264653;
      }
    }
  }

  .icon {
    color: #264653;
    cursor: pointer;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default MapStyled;
