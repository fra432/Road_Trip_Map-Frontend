import styled from "styled-components";

const LoginRegisterFormStyled = styled.div`
  z-index: 10;

  .form-container {
    display: flex;
    @media (max-width: 735px) {
      width: 18rem;
      height: 25rem;
      flex-direction: column;
      align-items: center;
    }
    width: 45rem;
    height: 18rem;
    background-color: #fefefe;
    border: 3px solid #fefefe;
    border-radius: 1rem;
    margin-top: 3rem;

    .image-container {
      @media (max-width: 735px) {
        display: none;
      }
      width: 30%;
      height: 100%;
      background-image: url("/images/road-trip-form.jpeg");
      background-size: cover;
      background-position: 80%;
      border-radius: 0.7rem 0 0 0.7rem;
    }

    .toggle-container {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      @media (max-width: 735px) {
        width: 100%;
        height: 25%;
        flex-direction: row;
        border-radius: 1rem 1rem 0 0;
      }

      .toggle {
        @media (max-width: 735px) {
          border-bottom: 0.2px solid #e7e6e6;
          border-right: none;
          width: 500%;
          height: 100%;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
        width: 100%;
        height: 50%;
        cursor: pointer;
        border-right: 0.2px solid #e7e6e6;
      }

      .active {
        background-color: #264653;
        color: #fff;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
      @media (max-width: 735px) {
        width: 100%;
        height: 75%;
      }
      width: 58%;
      height: 100%;

      .form-title {
        font-family: "Lobster", cursive;
        font-weight: 400;
      }

      .wrapper {
        position: relative;
        width: 80%;
        height: 2.2rem;

        .icon {
          position: absolute;
          left: 2%;
          top: 25%;
          color: #585757;
        }

        input {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding-left: 2rem;
          background-color: #eeeeee;
          border: none;
          letter-spacing: 2px;
          border-radius: 0.2rem;
        }
      }
      .hidden {
        display: none;
      }
    }
    .error {
      border: 1px solid red;
    }

    .button {
      width: 81%;
      height: 2.2rem;
      background-color: #264653;
      border: none;
      border-radius: 0.4rem;
      margin-top: 0.7rem;
      color: #fff;
      font-weight: 600;
      letter-spacing: 2px;
      cursor: pointer;
    }
  }
`;

export default LoginRegisterFormStyled;
