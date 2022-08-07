import styled from "styled-components";

const AboutStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  background-color: #f3f9f5;

  .about-section {
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
`;

export default AboutStyled;
