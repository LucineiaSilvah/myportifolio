import styled from "styled-components";

export const StyledBanner = styled.header`
background: url('https://media1.tenor.com/m/za-oUexNaXYAAAAC/good-morning-kiss.gif')no-repeat center / cover;
/* background: url('/src/assets/bgparanatech.png')no-repeat center / cover; */
height: 360px;
display: flex;
flex-direction: column;

.box-perfil{

 width: 40%;

height: 300px;
margin: 1.8rem auto;
display: flex;
align-items: center;
flex-direction: column;

padding: 1rem;

}
.box-imagem{
  width: 250px;
  height: 250px;
 border: 5px solid white;
 box-shadow: -4px 4px white ;

}
.foto{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  backdrop-filter: blur(10px);
}
.icon{
  width: 30px;
  filter: invert(100%);

}
.icon:hover{
  filter: drop-shadow(0 4px 6px var(--roxo));
}
span{
  display: flex;
  width: 100%;
  justify-content: space-around;
  background:black;
}
p{
 
}
@media screen and (max-width:800px) {
  .box-perfil{
    width:100%;
    padding:1rem 0;
  }
}

`