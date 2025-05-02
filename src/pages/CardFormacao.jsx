import React from 'react';

const CardFormacao = ({nome,icon,detalhes}) => {
  return (
    <>
    
      <ul>
        <li>
          <p>{nome}</p>
          <img src={icon} alt="" />
          <p>{detalhes}</p>
        </li>
       
      </ul>
   
    </>
  );
}

export default CardFormacao;
