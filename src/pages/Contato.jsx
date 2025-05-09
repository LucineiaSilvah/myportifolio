import React from 'react';
import { StyledMain } from './styles/StyledMain';
import { StyledContato } from './styles/StyledContato';

const Contato = () => {
  return (
    <>
    <StyledMain>
      <h1>contato</h1>
      <StyledContato>
        <form action="">
         <p>Fale comigo</p>
         <div>
          <label htmlFor="nome">{"> "}nome</label>
         <div> <input type="text" name='nome' /></div>
        </div>
         <div>
          <label htmlFor="email">{"> "}E-mail</label>
         <div> <input type="email" name='email' /></div>
        </div>
         <div>
          <div>
          <label htmlFor="email"> {"> "}Mensagem</label>
          </div>
          <textarea  name='mengagem' />
        </div>
        <div className='buttons'>
          <button>
            <p>Enviar</p>
          </button>
        </div>
        </form>
      </StyledContato>
    </StyledMain>
    </>
  );
}

export default Contato;
