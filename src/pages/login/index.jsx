import React, { useState } from 'react';
import './style.css'
import './media.css'
import authService from './authService.js';
import Footer from "../../components/Footer"
//imagens ou icones
import IconPenguin from '../../../public/assets/icons/penguinIconLogin.svg'
import logoCDI from '/assets/images/logoCdi.svg';


const LoginPage = () => {
 
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erroUsuario, setErroUsuario] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroEnvio, setErroEnvio] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    // Resetar erros antigos
    setErroUsuario('');
    setErroSenha('');
    setErroEnvio('');

    // Chamamos UMA função que contém TODA a lógica
    const resultado = authService.logar(usuario, senha);

    if (resultado.sucesso) {
      // Deu certo!
      console.log('Login bem-sucedido!');
      setUsuario('');
      setSenha('');
      // TODO: Redirecionar o usuário para a página principal
      // ex: history.push('/dashboard') ou similar
    } else {
      // Deu errado, vamos distribuir os erros para os states corretos
      if (resultado.erros.usuario) {
        setErroUsuario(resultado.erros.usuario);
      }
      if (resultado.erros.senha) {
        setErroSenha(resultado.erros.senha);
      }
      if (resultado.erros.envio) {
        setErroEnvio(resultado.erros.envio);
      }
    }
  };    


return (
    <>
    <div className="app-container">
      <div className="login-card">

        {/* Painel Esquerdo (Azul/Índigo) */}
        <div className="left-panel">
          <div>
            <h1 className="left-panel-h1">Seja bem-vindo(a)!</h1>
            <div className="left-panel-penguin">
              <img src={IconPenguin} alt="" />
            </div>
            <p className="left-panel-p">
              Entre em nosso site para você ter todas as informações a respeito
              da Unicamp.
            </p>
          </div>
          <div className="left-panel-logo">
            <img src={logoCDI} alt="" />
          </div>
        </div>

        {/* Painel Direito (Branco) */}
        <div className="right-panel">
          <h2 className="right-panel-h2">Login</h2>

          <form onSubmit={handleSubmit} className="login-form">
            {/* Campo Usuário */}
            <div className="form-group">
              <label htmlFor="usuario" className="form-label">
                Usuário
              </label>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="form-input"
              />
              {erroUsuario && (
                <span className="error-text">{erroUsuario}</span>
              )}
            </div>

            {/* Campo Senha */}
            <div className="form-group">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="form-input"
              />
              {erroSenha && <span className="error-text">{erroSenha}</span>}
            </div>

            {/* Esqueceu a senha */}
            <a href="/redefinir_senha" className="forgot-link">
              Esqueceu a senha?
            </a>

            {/* Botão Entrar */}
            <button type="submit" className="submit-btn">
              ENTRAR
            </button>

            {/* Erro de Envio */}
            {erroEnvio && <span className="submit-error">{erroEnvio}</span>}
          </form>
        </div>
      </div>
    </div>
 
     <Footer></Footer>
 </>
    
  );
}

export default LoginPage;