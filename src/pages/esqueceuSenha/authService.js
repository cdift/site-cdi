// authService.js
// Certifique-se de que 'export default authService;' está no final do arquivo.

const authService = {
  // ... (sua função logar já existente)

  /**
   * Simula o envio de e-mail para redefinição de senha.
   * @param {string} email - O e-mail do usuário.
   * @returns {object} - { sucesso: boolean, erros: { email, envio } }
   */
  solicitarRedefinicao: (email) => {
    const erros = {};
    let sucesso = false;

    if (!email) {
      erros.email = 'O campo de e-mail não pode estar vazio.';
    } else if (!email.includes('@') || !email.includes('.')) {
      erros.email = 'Por favor, insira um e-mail válido.';
    }

    if (Object.keys(erros).length > 0) {
      return { sucesso: false, erros };
    }

    // Simulação: Apenas o e-mail 'teste@unicamp.br' é válido para redefinição
    if (email === 'teste@unicamp.br') {
      sucesso = true;
    } else {
      erros.envio = 'E-mail não encontrado ou não registrado.';
    }

    return { sucesso, erros };
  },

  /**
   * Simula a redefinição da senha.
   * @param {string} novaSenha - A nova senha.
   * @param {string} confirmarSenha - A confirmação da nova senha.
   * @returns {object} - { sucesso: boolean, erros: { novaSenha, confirmarSenha, envio } }
   */
  redefinirSenha: (novaSenha, confirmarSenha) => {
    const erros = {};
    let sucesso = false;

    if (!novaSenha) {
      erros.novaSenha = 'A nova senha não pode estar vazia.';
    } else if (novaSenha.length < 6) {
      erros.novaSenha = 'A senha deve ter pelo menos 6 caracteres.';
    }

    if (!confirmarSenha) {
      erros.confirmarSenha = 'A confirmação da senha não pode estar vazia.';
    } else if (novaSenha !== confirmarSenha) {
      erros.confirmarSenha = 'As senhas não coincidem.';
    }

    if (Object.keys(erros).length > 0) {
      return { sucesso: false, erros };
    }

    // Simulação: Se as validações passarem, a senha é "redefinida"
    sucesso = true;

    return { sucesso, erros };
  },
};

export default authService; // Certifique-se de que esta linha está presente!