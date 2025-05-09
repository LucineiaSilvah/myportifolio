import React from 'react';
import { StyledMain } from './styles/StyledMain';
import { StyledContato } from './styles/StyledContato';

const Contato = () => {
  return (
    <>
    <StyledMain>
      <h1>contato</h1>
      <StyledContato>
      <form 
            action="https://api.staticforms.xyz/submit" 
            method="post">
            {/* StaticForms hidden field */}
            <input type="hidden" name="accessKey" value="1172f2e6-1454-47eb-9ffa-526735fdbf6e" />
            <input type="hidden" name="redirectTo" value="https://myportifolio-jade.vercel.app/" />
         <p>Fale comigo</p>
         <div>
          <label htmlFor="nome">{"> "}nome</label>
         <div> <input type="text" name='nome'required /></div>
        </div>
         <div>
          <label htmlFor="email">{"> "}E-mail</label>
         <div> <input type="email" name='email' required /></div>
        </div>
         <div>
          <div>
          <label htmlFor="email"> {"> "}Mensagem</label>
          </div>
          <textarea  name='mengagem' required />
        </div>
        <div className='buttons'>
          <button type='submit'>
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
