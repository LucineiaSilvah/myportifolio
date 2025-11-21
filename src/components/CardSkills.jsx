import React from 'react';

const CardSkills = ({nome,icon,id}) => {
  return (
    <>
    
   
        <li>
          <span>{id}</span>
          <p>{nome}</p>
          <img src={icon} alt="" />
        </li>
       
    
    </>
  );
}

export default CardSkills;
