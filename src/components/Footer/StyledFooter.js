import styled from "styled-components";

export const StyledFooter = styled.footer`
text-align:center;
display: grid;
grid-template-columns: 1fr 1fr; /* duas colunas */
grid-template-rows: auto auto; /* duas linhas */
background: #000;

.item1 {
  grid-column: 1;
  grid-row: 1;
}

.item2 {
  grid-column: 2;
  grid-row: 1;
}

.item3 {
  grid-column: 1 / 3; /* ocupa as duas colunas */
  grid-row: 2;


}
img{
  width: 120px;
}
ul{
  list-style: none;
}
li{
  
}
@media screen and (max-width:880px) {
}

@keyframes animate {
 from{


  }
  to{
  

  }
}
`


