import styled from "styled-components";

const HomePageStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-image: url("/images/travel-planner.jpeg");
  background-size: cover;

  header {
    align-self: flex-start;
    display: flex;
    z-index: 100;
    flex-direction: column;
    justify-content: center;

    .logo {
      width: 15rem;
    }

    .title {
      z-index: 100;
      font-family: "Lobster", cursive;
      width: 20rem;
      margin: 0;
      color: #fafafa;
      margin-left: 1rem;
      margin-top: -1rem;
    }

    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      background-color: #5c5a58;
      opacity: 0.5;
      z-index: -1;
    }
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

    &__description {
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
      font-style: italic;
    }
  }
`;

export default HomePageStyled;
