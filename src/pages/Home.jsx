import React from 'react';

import { StyledMain } from './styles/StyledMain';
import { StyledHome } from './styles/StyledHome';
import { StyledSkills } from './styles/StyledSkills';
import CardSkills from '../components/CardSkills';


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
     <StyledSkills >
       <h2>
       Hard Skills
       </h2>
<CardSkills/>
       <h2>
       Soft Skills
       </h2>
<CardSkills/>
    
     </StyledSkills>
    </StyledMain>


    </>
  );
}

export default Home;
