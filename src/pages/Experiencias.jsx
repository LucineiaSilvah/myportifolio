import React from 'react';
import { StyledMain } from './styles/StyledMain';
import CardExperiencia from './CardExperiencia'
import barbearia from '../assets/Macbook-Air-barbearia-sage-eight.vercel.app.png'
const Experiencias = () => {
  return (
    <>
    <StyledMain>

      <h1>experiencias</h1>
      <CardExperiencia  img={barbearia} descricao={'Site para uma Barbearia'} page={'https://barbearia-sage-eight.vercel.app/'} demo={'https://github.com/LucineiaSilvah/barbearia'}/>
    </StyledMain>
    </>
  );
}

export default Experiencias;
