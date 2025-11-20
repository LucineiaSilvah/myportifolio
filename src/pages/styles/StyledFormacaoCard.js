import styled from "styled-components";

export const StyledFormacaoCard = styled.ul`
display: grid;
  grid-template-columns:repeat(3,1fr);
gap: 4rem;
  justify-content: space-around;
text-align: center;
margin-top: 4rem;

h2{
  margin: 3rem;
}
h1{
  text-shadow: -2px 2px 4px black;
}
li{
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: space-around;
    border: 1px solid black;
    box-shadow: -3px 4px black;
    position: relative;
}
span{
  position:absolute;
  color: black;
  font-weight: bold;
  top:-50px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  border: 1px solid black;
width: 50px;
height: 40px;
}
img{
  width: 100px;
  height: 100px;
 
}

img:hover{
  filter: drop-shadow(2px 4px 6px var(--roxo));
}


@media screen and (max-width:880px) {

  display: grid;
  justify-content:center;
  grid-template-columns: 1fr 1fr;
  padding-left: 0;
  img{
  width: 60px;
}
  h1{
    font-size: 1.6rem;
  }
  h2{
    font-size: 1.2rem;
  }
}

@keyframes animate {
 from{


  }
  to{
  

  }
}
`

