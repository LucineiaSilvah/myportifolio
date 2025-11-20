import React from 'react';
import { StyledMain } from './styles/StyledMain';
import { StyledResume } from './styles/StyledResumo';
import { StyledFormacaoCard } from './styles/StyledFormacaoCard';
import { StyledSubTitle } from '../components/StyledSubTitle';
import CardFormacao from './CardFormacao';
import uniasselvi from '../assets/uniasselvi.png'
import alura from '../assets/alura.png'
import udemy from '../assets/udemy-logo.png'
import gran from '../assets/gran.png'

const Resumo = () => {
  return (
    <>
       <StyledMain>
        <StyledResume>
        <h1> Olá, Me chamo Lucineia Silva e sou Desenvolvedora Front-End </h1>
     <p> Sou Graduada em Gestão de Tecnologia da Informação, e formada em desenvolvimento Front-End pelo
     programa ONE 2023 da Oracle.<br></br>Atualmente Cursando bacharelado em Engenharia de Software.</p>
    
        </StyledResume>
      <StyledSubTitle>
       Formações Acadêmica
      </StyledSubTitle>
<StyledFormacaoCard>
  <CardFormacao nome="Engenharia de software" icon={gran} detalhes="cursando" id={1}/>
  <CardFormacao nome="Desenvolvimento web completo" icon={udemy} detalhes="cursando" id={2}/>
  <CardFormacao nome="Gestao de TI" icon={uniasselvi} detalhes="concluido" id={3}/>
  <CardFormacao nome="Desenvolvimento front end" icon={alura} detalhes="concluido" id={4}/>
</StyledFormacaoCard>

    </StyledMain>
    </>
  );
}

export default Resumo;
