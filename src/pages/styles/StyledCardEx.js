import styled from "styled-components";

export const StyledCardEx = styled.div`
border: 2px solid green;
display: flex;
flex-direction: column;
align-items: center;

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
  width: 60%;


}
button{
  padding: 2rem;
  margin: 1rem;
 
 

}
img:hover{
  filter: drop-shadow(2px 4px 6px rgba(2, 249, 39, 0.4));
}


@media screen and (max-width:880px) {
  border: 2px solid green;
display: flex;
flex-direction: column;
align-items: center;
  img{
  width: 90%;
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

