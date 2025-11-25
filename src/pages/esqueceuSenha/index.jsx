import React, { useState } from 'react';
import authService from './authService.js';
import './style.css'; // Usaremos os estilos base
import './media.css'; // E os media queries
import './redefinirSenha.css'; // <--- NOVO: CSS específico para a animação
import penguinIcon from '/assets/icons/imgForgetPassword.svg';
import correctIcon from '/assets/icons/correct.svg';


// Animação para o ícone de sucesso
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes scaleIn {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;
document.head.appendChild(styleSheet);


const RedefinirSenhaPage = () => {
  const [passo, setPasso] = useState('email'); // 'email', 'redefinirSenha', 'sucesso'

  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [erroEmail, setErroEmail] = useState('');
  const [erroNovaSenha, setErroNovaSenha] = useState('');
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState('');
  const [erroGeral, setErroGeral] = useState(''); // Para erros de envio

  // Função para lidar com o envio do e-mail
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setErroEmail('');
    setErroGeral('');

    const resultado = authService.solicitarRedefinicao(email);

    if (resultado.sucesso) {
      setPasso('redefinirSenha'); // Avança para o próximo passo
      setErroGeral(''); // Limpa qualquer erro geral anterior
    } else {
      if (resultado.erros.email) {
        setErroEmail(resultado.erros.email);
      }
      if (resultado.erros.envio) {
        setErroGeral(resultado.erros.envio);
      }
    }
  };

  // Função para lidar com o envio da nova senha
  const handleRedefinirSenhaSubmit = (e) => {
    e.preventDefault();
    setErroNovaSenha('');
    setErroConfirmarSenha('');
    setErroGeral('');

    const resultado = authService.redefinirSenha(novaSenha, confirmarSenha);

    if (resultado.sucesso) {
      setPasso('sucesso'); // Avança para o passo de sucesso
      // Após um tempo, redireciona para o login
      setTimeout(() => {
        // TODO: Implementar redirecionamento para a página de login
        // window.location.href = '/login'; // Exemplo simples, mas use React Router se tiver
        alert('Redirecionando para a página de Login...'); // Apenas para simular
        setPasso('email'); // Volta para o início para reusar o componente
        setEmail('');
        setNovaSenha('');
        setConfirmarSenha('');
      }, 3000); // 3 segundos antes de "redirecionar"
    } else {
      if (resultado.erros.novaSenha) {
        setErroNovaSenha(resultado.erros.novaSenha);
      }
      if (resultado.erros.confirmarSenha) {
        setErroConfirmarSenha(resultado.erros.confirmarSenha);
      }
      if (resultado.erros.envio) {
        setErroGeral(resultado.erros.envio);
      }
    }
  };

  // Renderização condicional dos formulários baseada no 'passo'
  const renderContent = () => {
    switch (passo) {
      case 'email':
        return (
          <form onSubmit={handleEmailSubmit} className="redefinir-form">
            <p className="form-description">
              Pode deixar que a gente resolve esse problema. Mande o seu e-mail no campo abaixo.
            </p>
            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
              {erroEmail && <span className="error-text">{erroEmail}</span>}
            </div>
            <button type="submit" className="submit-btn">ENVIAR</button>
            {erroGeral && <span className="submit-error">{erroGeral}</span>}
          </form>
        );
      case 'redefinirSenha':
        return (
          <form onSubmit={handleRedefinirSenhaSubmit} className="redefinir-form">
            <p className="form-description">
              Perfeito! Seu email foi confirmado! Agora, coloque a sua senha nova no campo abaixo.
            </p>
            <div className="form-group">
              <label htmlFor="novaSenha" className="form-label">Nova senha</label>
              <input
                type="password"
                id="novaSenha"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                className="form-input"
              />
              {erroNovaSenha && <span className="error-text">{erroNovaSenha}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="confirmarSenha" className="form-label">Confirme sua nova senha</label>
              <input
                type="password"
                id="confirmarSenha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="form-input"
              />
              {erroConfirmarSenha && <span className="error-text">{erroConfirmarSenha}</span>}
            </div>
            <button type="submit" className="submit-btn">ENVIAR</button>
            {erroGeral && <span className="submit-error">{erroGeral}</span>}
          </form>
        );
      case 'sucesso':
        return (
          <div className="sucesso-container">
            <img src={correctIcon} alt="" />
            <h3 className="sucesso-titulo">Tudo certo!</h3>
            <p className="sucesso-texto">Te encaminharemos para a página do Login.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="login-card">
        {/* Painel Esquerdo (Pode ser o mesmo do Login ou adaptado) */}
        <div className="right-panel">
          <h2 className="right-panel-h2">Redefinir sua senha</h2> {/* Título principal */}
            <div className="imgPenguin">
                <img src={penguinIcon} alt="" />
            </div>
          {/* Container para a animação */}
          <div className={`form-stage-container stage-${passo}`}>
            <div className="form-stage email-stage">
              {passo === 'email' && renderContent()}
            </div>
            <div className="form-stage redefinir-stage">
              {passo === 'redefinirSenha' && renderContent()}
            </div>
            <div className="form-stage sucesso-stage">
              {passo === 'sucesso' && renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedefinirSenhaPage;