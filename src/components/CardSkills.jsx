import React from 'react';

const CardSkills = ({nome,icon}) => {
  return (
    <>
    
   
        <li>
          <p>{nome}</p>
          <img src={icon} alt="" />
        </li>
       
    
    </>
  );
}

export default CardSkills;
