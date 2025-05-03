import React, { useEffect, useState } from 'react';
import { StyledMenu } from "./StyledMenu";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Certifique-se de usar scrollY e não screenY
      if (window.scrollY > 220) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledMenu className={isFixed ? 'fixed' : 'normal'}>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/resumo">Resumo</Link></li>
        <li><Link to="/experiencias">Experiências</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
