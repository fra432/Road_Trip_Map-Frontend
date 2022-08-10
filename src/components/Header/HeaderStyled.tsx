import styled from "styled-components";

const HeaderStyled = styled.div`
  padding: 0.9rem;
  top: 0%;
  background-color: #264653;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-container {
    width: 20%;
  }
  .logo {
    z-index: 100;
    cursor: pointer;
    width: 10rem;
  }

  .username {
    font-family: "Lobster", cursive;
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .button-logout {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    color: #fff;
    cursor: pointer;
    margin-right: 0.3rem;

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
`;

export default HeaderStyled;
