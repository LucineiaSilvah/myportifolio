import React from 'react';
import { StyledBanner } from './StyledBanner';
import Menu from './Menu';

const Header = () => {
  return (
    <>
    <StyledBanner>
     <div className='box-perfil'>
      <div className='box-imagem'>

      <img src="" alt="img" />
      </div>
      <span>
       <p>github</p>
       <p>gmail</p>
       <p>whats</p>
       <p>linkedin</p>
      </span>
     </div>
  <Menu/>
    </StyledBanner>

    </>
  );
}

export default Header;
