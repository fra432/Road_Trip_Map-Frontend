import styled from "styled-components";

const LoginRegisterFormStyled = styled.div`
  .form-container {
    display: flex;
    width: 45rem;
    height: 18rem;

    .image-container {
      width: 22%;
      height: 100%;
      background-image: url("/images/road-trip-form.jpeg");
      background-size: cover;
      background-position: 80%;
    }

    .toggle-container {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .toggle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000;
        width: 100%;
        height: 50%;
        cursor: pointer;
      }

      .active {
        background-color: #eb5e28;
        color: #fff;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
      width: 58%;
      height: 100;

      .form-title {
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

    .button {
      width: 81%;
      height: 2.2rem;
      background-color: #eb5e28;
      border: none;
      margin-top: 0.7rem;
      color: #fff;
      font-weight: 600;
      letter-spacing: 2px;
      cursor: pointer;
    }
  }
`;

export default LoginRegisterFormStyled;
