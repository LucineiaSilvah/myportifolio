import styled from "styled-components";

export const StyledFormacaoCard = styled.ul`
display: flex;
  align-items: center;
  align-items: center;
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

