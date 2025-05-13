import styled from "styled-components";

export const StyledBanner = styled.header`
background: url('https://media1.tenor.com/m/za-oUexNaXYAAAAC/good-morning-kiss.gif')no-repeat center / cover;
/* background: url('/src/assets/bgparanatech.png')no-repeat center / cover; */
height: 360px;
display: flex;
flex-direction: column;

.box-perfil{

 width: 40%;
 border-radius: 10rem 10rem 0 0;
height: 300px;
margin: 1.8rem auto;
display: flex;
align-items: center;
flex-direction: column;
backdrop-filter: blur(10px);
padding: 1rem;

}
.box-imagem{
  width: 250px;
  height: 250px;

}
.foto{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
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
  width: 300px;
  
  justify-content: space-around;
}
p{
 
}
@media screen and (max-width:800px) {
  .box-perfil{
    width:60%
  }
}

`