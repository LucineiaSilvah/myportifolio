import styled from "styled-components";

export const StyledCardEx = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 4rem auto;
width: 40%;
padding: 1rem;
border: 2px solid black;
box-shadow: -4px 4px black;
background:var(--bg-color);

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
 height: 40px;
 margin: 2rem;
 border: 1px solid black;
 display: flex;
align-items: center;
justify-content: center;
padding-bottom: .3rem;
background:var(--bg-color);

}
button a{
color: var(--text-color);
  padding:  1rem .9rem;
border-radius:4px 4px;

}

button:hover {
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

