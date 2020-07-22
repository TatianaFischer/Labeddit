import React from 'react';

import api from '../../services/api';
// import { Container } from './styles';

function Login() {
  return (
    <>
      <label htmlFor="login">Login</label>
      <input type="email" name="login" />
      <label htmlFor="senha">Senha</label>
      <input type="pasword" name="senha" />
      <button>Login</button>
      <button>Registrar</button>
    </>
  );
}

export default Login;
