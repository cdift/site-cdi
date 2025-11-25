const authService = {
  /**
   * Tenta autenticar o usuário.
   * @param {string} usuario - O nome de usuário.
   * @param {string} senha - A senha.
   * @returns {object} - Um objeto com { sucesso: boolean, erros: { usuario, senha, envio } }
   */
  logar: (usuario, senha) => {
    const erros = {};
    let sucesso = false;

    // 1. Validação de campos vazios
    if (!usuario) {
      erros.usuario = 'Campo vazio. Preenche corretamente';
    }
    if (!senha) {
      erros.senha = 'Campo vazio. Preenche corretamente';
    }

    // Se houver erros de validação, retorna imediatamente
    if (Object.keys(erros).length > 0) {
      return { sucesso: false, erros };
    }

    // 2. Lógica de Autenticação (Simulação)
    // (Aqui você faria a chamada de API, ex: await fetch(...))
    if (usuario !== 'admin' || senha !== '123') {
      erros.envio = 'Erro ao enviar';
    } else {
      sucesso = true;
    }

    return { sucesso, erros };
  },
};

export default authService;