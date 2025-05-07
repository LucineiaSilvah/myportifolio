import React from 'react';
import { StyledMain } from './styles/StyledMain';
import CardExperiencia from './CardExperiencia'
// import barbearia from '../assets/Macbook-Air-barbearia-sage-eight.vercel.app.png'
import { data } from '../../db'
const Experiencias = () => {
  return (
    <>
    <StyledMain>

      <h1>experiencias</h1>
      {/* <CardExperiencia  img={barbearia} descricao={'Site para uma Barbearia'} page={'https://barbearia-sage-eight.vercel.app/'} demo={'https://github.com/LucineiaSilvah/barbearia'}/> */}
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
    </StyledMain>
    </>
  );
}

export default Experiencias;
