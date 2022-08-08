import styled from "styled-components";

const MapPageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ffffff;

  .page-content {
    z-index: 100;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .trip-name {
      font-family: "Lobster", cursive;
      color: #264653;
      font-size: 3rem;
      width: 80%;
      text-align: center;
      margin: 2rem 0;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #e4e4e4;
    }

    .icon {
      cursor: pointer;
    }
  }
`;

export default MapPageStyled;
