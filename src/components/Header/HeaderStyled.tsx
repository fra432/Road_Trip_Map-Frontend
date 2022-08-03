import styled from "styled-components";

const HeaderStyled = styled.div`
  padding-top: 1rem;
  position: absolute;
  top: 0%;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
      font-weight: 600;
    }
  }
`;

export default HeaderStyled;
