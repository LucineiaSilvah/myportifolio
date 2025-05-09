import styled from "styled-components";

export const StyledCardEx = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 4rem auto;
width: 40%;
padding: 2rem;
background: #000;

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
  width: 100%;
 border-radius: .2rem .2rem 0 0 ;

}
.texts{
  width: 100%;
  text-align: left;

}
.buttons{
  display: flex;
  align-items: center;
}
button{
 width: 80px;
 height: 60px;
 margin: 2rem;
 border: 3px solid white;
 display: flex;
align-items: center;
justify-content: center;
border-radius:2px 2px;
padding-bottom: .3rem;
}
button a{
  background:rgb(184, 183, 183);
  padding:  1rem .9rem;
  color: rgba(3, 247, 215, 0.77) ;
  text-shadow:1px 2px 3px  rgba(2, 249, 39, 0.4) ;
border-radius:4px 4px;
border: 1px solid rgb(108, 107, 107);
}
p{
  color: rgba(3, 247, 40, 0.77) ;
}

button:hover a {
  padding:  .8rem;
}

@media screen and (max-width:880px) {
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
  img{
  width: 100%;
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

  padding:  9rem .8rem;


  }
  to{
    padding:  .7rem;

  }
}
`

