import styled from "styled-components";

export const StyledExperiencias = styled.div`
  font-family: "Turret Road", sans-serif;
  text-align: center;
height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0rem;
    font-family: "Press Start 2P", system-ui;
    color: var(--text-color);
    text-shadow: -2px 2px 4px black;
  }
  h2 {
    font-size: 1.2rem;
    margin: 0;
    color: var(--text-color);
  }
 
  p + p {
    font-family: "Turret Road", sans-serif;
    color:var(--roxo);
    font-weight: 100;

  }

  @media screen and (max-width: 880px) {
    h1 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
