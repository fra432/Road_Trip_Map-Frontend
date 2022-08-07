import styled from "styled-components";

const HomePageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .options {
    width: 100%;

    @media (min-width: 800px) {
      display: flex;
    }

    .option {
      cursor: pointer;
      @media (min-width: 300px) {
        width: 100%;
        height: 15rem;
      }
      @media (min-width: 500px) {
        width: 100%;
        height: 30rem;
      }
      @media (min-width: 800px) {
        width: 50%;
        height: 20rem;
      }
      @media (min-width: 1000px) {
        width: 50%;
        height: 25rem;
      }

      @media (min-width: 1200px) {
        width: 50%;
        height: 30rem;
      }
      position: relative;
      width: 100%;
      height: 30rem;

      &__video {
        width: 100%;
        height: 100%;

        @media (min-width: 800px) {
          border-right: 1px solid #264653;
        }

        border: 2px solid #264653;
        border-bottom: 2px solid #264653;
      }

      &__image {
        width: 100%;
        height: 100%;

        @media (min-width: 800px) {
          border-left: 1px solid #264653;
          border-top: 2px solid #264653;
        }

        border: 2px solid #264653;
        border-top: 1px solid #264653;
      }

      :hover {
        :before {
          content: "";
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.4;
          transition: 0.5s;
        }
        .option__title {
          opacity: 1;
        }
      }

      &__title {
        z-index: 3;
        color: white;
        opacity: 0;
        transform: translate(-7.5rem, -2rem);
        transition: 0.5s;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 15rem;
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }

  .user-options {
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

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
