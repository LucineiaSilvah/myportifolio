import { Link } from "react-router-dom";
import { StyledFooter } from "./StyledFooter";
import logo from '../../assets/logo-1-t.png'
const Footer = () => {
  return (
    <StyledFooter>
      <div className="item1">
        <img src={logo} alt="" />
      </div>
        <nav className="item2"> 
        <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/resumo">Resumo</Link></li>
        <li><Link to="/experiencias">Experiências</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
        </nav>
        <div className="item3">
          <p>&copy;Lucineia Silva - Todos os direitos reservados</p>
        </div>
    </StyledFooter>
  );
}

export default Footer;
