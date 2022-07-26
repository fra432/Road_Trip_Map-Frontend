import styled from "styled-components";

const LocationFormStyled = styled.div`
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

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    height: fit-content;
    background-color: #264653;
    padding: 2rem;
    border-radius: 2rem;
    border: 3px solid #fff;

    .form-label {
      color: #fff;
      align-self: flex-start;
      margin-bottom: -0.2rem;
    }

    .name {
      font-weight: 600;
    }

    .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-top: 1rem;

      .icon {
        &--close {
          color: #fff;
          cursor: pointer;
        }
      }

      .button {
        &--submit {
          background-color: #fff;
          color: #264653;
          font-weight: 600;
        }
      }
    }
  }
`;

export default LocationFormStyled;
