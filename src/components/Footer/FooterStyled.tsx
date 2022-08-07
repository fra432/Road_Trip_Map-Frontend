import styled from "styled-components";

const FooterStyled = styled.div`
  width: 100%;

  .footer {
    padding: 2rem 0;
    background-color: #264653;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;

    &__contacts {
      color: #fff;
      display: flex;
      gap: 1rem;
    }
  }
`;

export default FooterStyled;
