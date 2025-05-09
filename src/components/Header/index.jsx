import React from "react";
import { StyledBanner } from "./StyledBanner";
import github from "../../assets/github-142-svgrepo-com.svg";
import gmail from "../../assets/gmail-svgrepo-com.svg";
import whats from "../../assets/whatsapp-128-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-round-svgrepo-com.svg";
import foto from '../../assets/luart.png'
import Menu from "./Menu";
import bg from '../../../public/bg-tech.png';
const Header = () => {
  return (
    <>
      <StyledBanner>
        <div className="box-perfil"  style={{background:`url(${bg})no-repeat center /cover`}}>
          <div className="box-imagem" >
            <img src={foto} alt="img" className="foto"/>
          </div>
          <span>
            <p>
            <a href="https://github.com/LucineiaSilvah" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="" className="icon" />
              </a>
            </p>
            <p>
              <a href="mailto:lucineiasilva.dev@gmail.com">
                <img src={gmail} alt="" className="icon"/>
              </a>
            </p>
            <p>
            <a href="https://api.whatsapp.com/send?phone=5541992676801" target="_blank" rel="noopener noreferrer">
                {" "}
                <img src={whats} alt="" className="icon"/>
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/lucineia-r-silva-frontend/" target="_blank" rel="noopener noreferrer">
                {" "}
                <img src={linkedin} alt="" className="icon"/>
              </a>
            </p>
          </span>
        </div>
        <Menu />
      </StyledBanner>
    </>
  );
};

export default Header;
