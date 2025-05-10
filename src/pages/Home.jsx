import React from 'react';

import { StyledMain } from './styles/StyledMain';
import { StyledHome } from './styles/StyledHome';
import { StyledSkills } from './styles/StyledSkills';
import CardSkills from '../components/CardSkills';
import html from '../assets/html5-brands.svg';
import css from '../assets/css3-alt-brands.svg';
import js from '../assets/js-brands.svg';
import node from '../assets/node-js-brands.svg';
import bood from '../assets/bootstrap-brands.svg';
import react from '../assets/react-brands.svg';
import equipe from '../assets/people-group-solid.svg';
import paciencia from '../assets/ampulheta.svg';
import forca from '../assets/hand-fist-solid.svg';
import clock from '../assets/clock-rotate-left-solid.svg';
import curiosidade from '../assets/magnifying-glass-solid.svg';
import solucao from '../assets/solucao.svg';
import { StyledSubTitle } from '../components/StyledSubTitle';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <StyledMain>
      <StyledHome>
      <h2>I'm</h2>
    <h1>Developer</h1>
    <p>
    "Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema ".
    </p>
    <p>Thales Valentim</p>

    
      </StyledHome>
    <StyledSubTitle>
      Hard Skills
    </StyledSubTitle>
     <StyledSkills >
     
<CardSkills nome="html" icon={html}/>
<CardSkills nome="css" icon={css}/>
<CardSkills nome="js" icon={js}/>
<CardSkills nome="bootstrap" icon={bood}/>
<CardSkills nome="node" icon={node}/>
<CardSkills nome="react" icon={react}/>
  
     </StyledSkills>
     <StyledSubTitle>
      Soft Skills
    </StyledSubTitle>
    <StyledSkills >
     
     <CardSkills nome="trabalho em equipe" icon={equipe}/>
     <CardSkills nome="paciência" icon={paciencia}/>
     <CardSkills nome="curiosidade" icon={curiosidade}/>
     <CardSkills nome="resolução de problemas" icon={solucao}/>
     <CardSkills nome="força de vontade e esforço" icon={forca}/>
     <CardSkills nome="agilidade" icon={clock}/>
    
       
          </StyledSkills>
    </StyledMain>


    </>
  );
}

export default Home;
