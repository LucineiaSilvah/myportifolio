import styled from "styled-components";

export const StyledResume = styled.div`
font-family:  "Turret Road", sans-serif;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid black;
box-shadow: -3px 4px black;

width: 100%;
h1{
  font-family: "Press Start 2P", system-ui;
  font-size: 1.7rem;
 font-weight: 800;

}
h2{

}



@media screen and (max-width:880px) {
 

  h1{
    font-size: 1.2rem;
  }
  h2{
    font-size: 1.2rem;
  }
  p{
    font-size: .8rem;
  }
}
`


