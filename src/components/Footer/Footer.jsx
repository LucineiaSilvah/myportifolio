import { Link } from "react-router-dom";
import { StyledFooter } from "./StyledFooter";
import logo from '../../assets/logo-1-t.png'
import up from '../../assets/arrow-up-solid.svg'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="item1" id="top">
        <img src={logo} alt="" />
      </div>
        <nav className="item2"> 
          <a href="#">

          <img src={up} alt="" />
          </a>
        {/* <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/resumo">Resumo</Link></li>
        <li><Link to="/experiencias">Experiências</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul> */}
        </nav>
        <div className="item3">
          <p>&copy;Lucineia Silva - Todos os direitos reservados</p>
        </div>
    </StyledFooter>
  );
}

export default Footer;
