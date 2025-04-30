import styled from "styled-components";

export const StyledBanner = styled.header`
background: url('https://media1.tenor.com/m/za-oUexNaXYAAAAC/good-morning-kiss.gif')no-repeat center / cover;
height: 360px;
display: flex;
flex-direction: column;

.box-perfil{

 width: 90%;
height: 250px;
margin:0 auto;
margin-top: 100px;
display: flex;
align-items: center;
flex-direction: column;
backdrop-filter: blur(20px);
padding: 1rem;
}
.box-imagem{
  width: 150px;
  height: 150px;

}
.foto{
  width: 100%;

}
.icon{
  width: 30px;
  filter: invert(100%);

}
span{
  display: flex;
  width: 300px;
  
  justify-content: space-around;
}
p{
 
}


`