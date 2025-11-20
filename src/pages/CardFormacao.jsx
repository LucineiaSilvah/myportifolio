import React from 'react';

const CardFormacao = ({nome,icon,detalhes,id}) => {
  return (
    <>
    
        
        <li>
          <span>{id}</span>
          <p>{nome}</p>
          <img src={icon} alt="" />
          <p>{detalhes}</p>
        </li>
       
  
   
    </>
  );
}

export default CardFormacao;
