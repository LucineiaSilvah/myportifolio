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
import equipe from '../assets/people-group-solid (2).svg';
import paciencia from '../assets/hourglass-half-solid (1).svg';
import forca from '../assets/hand-fist-solid (1).svg';
import clock from '../assets/clock-rotate-left-solid (1).svg';
import curiosidade from '../assets/magnifying-glass-solid (2).svg';
import solucao from '../assets/lightbulb-solid.svg';
import { StyledSubTitle } from '../components/StyledSubTitle';


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
     
<CardSkills nome="html" icon={html} id={1}/>
<CardSkills nome="css" icon={css} id={2}/>
<CardSkills nome="js" icon={js} id={3}/>
<CardSkills nome="bootstrap" icon={bood} id={4}/>
<CardSkills nome="node" icon={node} id={5}/>
<CardSkills nome="react" icon={react} id={6}/>
  
     </StyledSkills>
     <StyledSubTitle>
      Soft Skills
    </StyledSubTitle>
    <StyledSkills >
     
     <CardSkills nome="trabalho em equipe" icon={equipe} id={1}/>
     <CardSkills nome="paciência" icon={paciencia} id={2}/>
     <CardSkills nome="curiosidade" icon={curiosidade} id={3}/>
     <CardSkills nome="resolução de problemas" icon={solucao} id={4}/>
     <CardSkills nome="força de vontade e esforço" icon={forca} id={5}/>
     <CardSkills nome="agilidade" icon={clock} id={6}/>
    
       
          </StyledSkills>
    </StyledMain>


    </>
  );
}

export default Home;
