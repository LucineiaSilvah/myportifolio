import React from 'react';
import { StyledMain } from './styles/StyledMain';
import CardExperiencia from './CardExperiencia';
import { StyledExperiencias } from './styles/StyledExperiencias'
import { data } from '../../db'
const Experiencias = () => {
  return (
    <>
    <StyledMain>
 <StyledExperiencias>
 <h1>experiencias</h1>
   
      {data && data[0].destaque.map((p,i)=>{
        return(
        <CardExperiencia key={i}
        imagem={p.imagem}
        titulo={p.titulo}
        descricao={p.descricao}
        tech={p.tech}
        demo={p.demo}
        repo={p.repo}
        />)
      })}
 </StyledExperiencias>
     
    </StyledMain>
    </>
  );
}

export default Experiencias;
