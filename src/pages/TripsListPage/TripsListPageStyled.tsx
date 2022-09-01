import styled from "styled-components";

const TripsListPageStyled = styled.div`
  width: 90%;
  padding: 2rem 0;
  border-bottom: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  gap: 2rem;

  .title {
    font-family: "Lobster", cursive;
    color: #264653;
    font-size: 2rem;
    margin: 0;
    width: 80%;
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e4e4e4;
  }

  p {
    margin: 0;
    font-weight: 400;
    font-size: 1.1rem;
    font-style: italic;
  }

  .redirect {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    justify-content: center;
    margin-top: -1.4rem;

    a {
      cursor: pointer;
      font-style: italic;
    }
  }
`;

export default TripsListPageStyled;
