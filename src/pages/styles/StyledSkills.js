import styled from "styled-components";

export const StyledSkills = styled.ul`
display: grid;
grid-template-columns:repeat(3,1fr);
gap: 1rem;
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
padding: 10px;
border: 2px solid black;
box-shadow: -3px 4px ;
padding: 1rem;
}
img{

  width: 50px;
  height: 50px;
  filter: invert();
 
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


