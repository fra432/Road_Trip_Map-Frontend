import styled from "styled-components";

const HomePageStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-image: url("/images/background2.jpeg");
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
  .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    color: #fff;

    &__username {
      font-weight: 600;
      font-size: 1.6rem;
    }
  }

  .user-options {
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    .option {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      width: 20rem;

      .image {
        width: 100%;
        border: 2px solid #264653;
        border-radius: 2rem;
        background-color: #fff;
      }
    }
    .button {
      height: 3rem;
      background-color: #fff;
      color: #264653;
      border: 2px solid #264653;
      border-radius: 2rem;
      font-weight: 600;
    }
  }
`;

export default HomePageStyled;
