import styled from "styled-components";

export const StyledSkills = styled.ul`
display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-around;
text-align: center;
margin-top: 4rem;
padding: 3rem 0;
h2{
  margin: 3rem;
}
li{
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
img{

  width: 50px;
  height: 50px;
 
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
 
  width: 80px;
  height: 80px;
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


