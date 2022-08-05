import styled from "styled-components";

const HeaderStyled = styled.div`
  padding: 0.9rem;
  top: 0%;
  background-color: #264653;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #fff;

  .logo {
    z-index: 100;
    width: 10rem;
    cursor: pointer;
  }

  .button-logout {
    z-index: 100;
    cursor: pointer;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    span {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

export default HeaderStyled;
