import styled from "styled-components";

const InfoLocationModalStyled = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(250, 250, 250, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .location {
    position: relative;
    width: 90%;
    background-color: #fff;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0.5rem;
    border: 2px solid #264653;

    &__description {
      text-align: center;
      width: 70%;
      padding: 1rem 0;
      font-weight: 400;
      margin: 0;
    }

    .carousel {
      padding-top: 2rem;
      width: 80%;

      .carousel-inner {
        border-radius: 2rem;
      }

      img {
        width: 80%;
        height: 20rem;
        object-fit: cover;
      }
    }

    .line {
      width: 80%;
      height: 1px;
      background-color: #e6e6e6;
    }

    .icon {
      cursor: pointer;

      &--close {
        position: absolute;
        top: 3%;
        right: 3%;
      }

      &--cancel {
        margin-top: 1rem;
      }
    }
  }
`;

export default InfoLocationModalStyled;
