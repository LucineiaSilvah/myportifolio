import { StyledCardEx } from "./styles/StyledCardEx";

const CardExperiencia = ({img,descricao,demo,page}) => {
  return (
    <StyledCardEx>
       <img src={img} alt="" />
       <div>
        <p>{descricao}</p>
       </div>
       <div>
        <button>
          <a href={demo}>Code</a>
        </button>
        <button>
          <a href={page}>Page</a>
        </button>
       </div>
    </StyledCardEx>
  );
}

export default CardExperiencia;
