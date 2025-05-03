import React from 'react';

const CardFormacao = ({nome,icon,detalhes}) => {
  return (
    <>
    
   
        <li>
          <p>{nome}</p>
          <img src={icon} alt="" />
          <p>{detalhes}</p>
        </li>
       
  
   
    </>
  );
}

export default CardFormacao;
