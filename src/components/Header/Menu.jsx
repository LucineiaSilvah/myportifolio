import React from "react";
import { StyledMenu } from "./StyledMenu";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
   
      <StyledMenu>
      <ul>
      <li>
      <Link to="/">inicio</Link>
        </li>
        <li>
          <Link to="/resumo">Resumo</Link>
        </li>
        <li>
        <Link to="/experiencias">Experiências</Link>
        </li>
        <li>
        <Link to="/contato">Contato</Link>
        </li>
      </ul>
      
      </StyledMenu>
 
  );
};

export default Menu;
