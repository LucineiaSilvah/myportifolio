import styled from "styled-components";

export const StyledHome = styled.div`
border: 1px solid yellow;
font-family:  "Turret Road", sans-serif;
text-align: center;
height: 30vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
margin: 0rem;
  font-family: "Press Start 2P", system-ui;
}
h2{
  font-size: 1.2rem;
margin:0;
}

p + p{
  font-family:  "Turret Road", sans-serif;
 color:rgb(130, 130, 130);

}


@media screen and (max-width:880px) {
 
 
  h1{
    font-size: 1.6rem;
  }
  h2{
    font-size: 1.2rem;
  }
}
`


