import styled from "styled-components";

export const StyledMenu = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  top: -30px;
  width: 95%;
  padding: .6rem 2rem;
  background:var(--cinzaMedio);
  border-bottom: 3px solid var(--roxoIntenso);
  transition: all 0.3s ease;


  &.fixed {
    position: fixed;
    top: 0;

    box-shadow: 0 2px 8px rgb(0, 0, 0);
    z-index: 1000;
  }

  &.normal {
    position: relative;

  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    list-style: none;
    padding: 0;
  }
`;
