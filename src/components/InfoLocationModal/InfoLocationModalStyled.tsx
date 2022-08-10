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
    width: 80%;
    background-color: #fff;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0.5rem;
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
      width: 70%;

      .carousel-inner {
        border-radius: 2rem;
      }

      img {
        width: 70%;
        height: 25rem;
        object-fit: cover;
      }
    }

    .user-option {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 4rem;
      text-align: center;
      color: #264653;
      cursor: pointer;

      &__title {
        font-weight: 500;
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
