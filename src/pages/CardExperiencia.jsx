import { StyledCardEx } from "./styles/StyledCardEx";

const CardExperiencia = ({imagem,titulo,descricao,tech,demo,repo}) => {
  return (
    <StyledCardEx>
       <img src={imagem} alt="" />
       <div className="texts">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <p>{tech}</p>

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
