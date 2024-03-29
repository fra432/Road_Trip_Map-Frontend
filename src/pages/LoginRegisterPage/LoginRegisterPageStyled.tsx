import styled from "styled-components";

interface Props {
  background: string;
}

const LoginRegisterPageStyled = styled.div<Props>`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url(${(props: Props) => props.background});
  background-size: cover;
  transition-delay: background-image 3s;
  transition: background-image 2s;

  header {
    align-self: flex-start;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo {
      width: 15rem;
    }

    .title {
      font-family: "Lobster", cursive;
      width: 20rem;
      font-size: 1.7rem;
      margin: 0;
      color: #fafafa;
      margin-left: 1rem;
      margin-top: -1rem;
    }
  }

  .description {
    z-index: 10;
    width: 80%;
    color: #fafafa;
    font-size: 1.4rem;
    font-weight: 600;
    font-style: italic;
    text-align: center;
    margin-top: 1rem;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #5c5a58;
    opacity: 0.5;
  }
`;

export default LoginRegisterPageStyled;
