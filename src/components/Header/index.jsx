import React from "react";
import { StyledBanner } from "./StyledBanner";
import github from "../../assets/github-142-svgrepo-com.svg";
import gmail from "../../assets/gmail-svgrepo-com.svg";
import whats from "../../assets/whatsapp-128-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-round-svgrepo-com.svg";
import foto from '../../assets/1744328854800.png'
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <StyledBanner>
        <div className="box-perfil">
          <div className="box-imagem">
            <img src={foto} alt="img" className="foto"/>
          </div>
          <span>
            <p>
              <a href="#">
                <img src={github} alt="" className="icon" />
              </a>
            </p>
            <p>
              <a href="#">
                <img src={gmail} alt="" className="icon"/>
              </a>
            </p>
            <p>
              <a href="#">
                {" "}
                <img src={whats} alt="" className="icon"/>
              </a>
            </p>
            <p>
              <a href="#">
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
