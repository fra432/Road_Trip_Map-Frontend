import styled from "styled-components";

const TripStyled = styled.li`
  z-index: 200;
  width: 20rem;
  height: 20rem;
  border: 2px solid #264653;
  border-radius: 10rem;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  cursor: pointer;

  :hover {
    transform: translateY(20px);

    :before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10rem;
      background-color: black;
      opacity: 0.4;
      transition: 0.5s;
    }
    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10rem;
  }

  .info {
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;

    h1 {
      margin: 0px;
    }
    p {
      letter-spacing: 1px;
      font-size: 15px;
      margin-top: 8px;
    }
  }
`;

export default TripStyled;
