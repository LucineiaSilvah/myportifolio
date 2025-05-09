import styled from "styled-components";

export const StyledContato = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 60%;
margin: auto;
background: #000;
padding: 2rem;
border-radius: 1rem;
h2{
  margin: 3rem;

}
h1{
  text-shadow: -2px 2px 4px black;

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
 width:100%;
 height: 60px;
 margin: 2rem;
 border: 3px solid white;
 display: flex;
align-items: center;
justify-content: center;
border-radius:2px 2px;
padding-bottom: .3rem;
}
button p{
  background:rgb(184, 183, 183);
  padding:.8em .4rem;
  width: 95%;
  color: rgba(3, 247, 215, 0.77) ;
margin-bottom: 1.1rem;
border-radius:4px 4px;
}
p{
  color: rgba(3, 247, 40, 0.77) ;
}

button:hover p {
  padding:.7em .4rem;
  margin-bottom: .9rem;
}
form{
  width: 100%;
  padding: 1rem;
}
label{
  font-weight: bold;
  text-transform: capitalize;
}
input,textarea{
width: 95%;
padding: .4rem;
margin: 1rem 0;

}
form p {
  text-align: center;
}
 

@media screen and (max-width:880px) {
display: flex;
flex-direction: column;
align-items: center;
width: 80%;

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

