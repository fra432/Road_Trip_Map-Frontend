import styled from "styled-components";

const AboutStyled = styled.div`
  width: 100%;
  margin-top: 2rem;

  .about-head {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    background-color: #f3f9f5;

    &__section {
      width: 20rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;

      &__icon {
        margin-bottom: 1rem;
        color: #264653;
      }

      &__title {
        font-size: 1.2rem;
      }

      &__description {
        font-weight: 400;
      }
    }
  }

  .about-main {
    width: 100%;
    height: 30rem;
    display: flex;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    &__description {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      &__title {
        font-size: 1.4rem;
        padding-bottom: 0.5rem;
      }

      &__description {
        width: 60%;
        font-size: 1.1rem;
        font-weight: 300;

        @media (max-width: 600px) {
          width: 80%;
        }
      }
    }

    &__image {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 80%;
        @media (min-width: 1000px) {
          width: 65%;
        }
      }
    }
  }
`;

export default AboutStyled;
