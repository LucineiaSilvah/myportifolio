import styled from "styled-components";

export const StyledContato = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 60%;
margin: auto;
border: 2px solid black;
color:var(--text-color);
padding: 2rem;
  background: var(--bg-card);

h2{
  margin: 3rem;
color:var(--text-color);
}
h1{
  text-shadow: -2px 2px 4px black;
color:var(--text-color);
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
 
 margin: 2rem;
 border: 1px solid black;

background:black;


}
button p{
color: #fff;
  width: 95%;
margin-bottom: 1.1rem;

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
background: #fff;

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

