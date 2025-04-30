import styled from "styled-components";

export const StyledSkills = styled.div`
border: 1px solid red;

text-align: center;
margin-top: 4rem;
h2{
  margin: 3rem;
}
ul{
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-around;
  list-style: none;
}
svg{
  width: 100px;
  filter: drop-shadow(2px 4px 6px rgba(41, 141, 2, 0.4));
}

svg:hover{
  filter: drop-shadow(2px 4px 6px rgba(249, 2, 2, 0.4));
}


@media screen and (max-width:880px) {
 ul{
  display: grid;
  justify-content:center;
  grid-template-columns: 1fr 1fr;
  padding-left: 0;
 }
  svg{
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


