import { StyledCardEx } from "./styles/StyledCardEx";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const CardExperiencia = ({imagem,titulo,descricao,tech,demo,repo}) => {
  return (
    <StyledCardEx  data-aos="zoom-in-up"
    data-aos-offset="200"
    data-aos-delay="80"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
>
       <img src={imagem} alt=""  />
       <div className="texts">
        <h3>{titulo}</h3>
        <p>{"> "} {descricao}</p>
        <p>{"> "}{tech}</p>

       </div>
     
        <div className="buttons">
        <button>
          <a href={demo}>Page</a>
        </button>
        <button>
          <a href={repo}>Code</a>
        </button>
       </div>
    </StyledCardEx>
  );
}

export default CardExperiencia;
