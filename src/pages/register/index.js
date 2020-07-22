import React, { useState } from 'react';

import { RedirectLogged } from '../../utils/Auth';
import { RegisterUser } from '../../utils/LoginAndCreateUser';
import useInputValue from '../../Hooks/useInputs';
import { useHistory } from 'react-router-dom';

import {Form, Container, Header, Image, Button} from './style';
import TextField from '@material-ui/core/TextField';
import Logo from '../../components/img/logo-eddit.png';

function Register() {
  const [name, setName] = useInputValue('');
  const [email, setEmail] = useInputValue('');
  const [password, setPassword] = useInputValue('');
  const history = useHistory();

  RedirectLogged();
  const handleCreateUser = (e) => {
    e.preventDefault();
    RegisterUser(name, email, password);
    history.push('/');
  };

  return (
    <>
      <Header><Image src={Logo}/></Header>
      <Container>
        <Form action="name" onSubmit={handleCreateUser}>
          <h2>Cadastro</h2>
          <TextField 
           label="Nome do usuário"
           type="text" 
           id="name" value={name} 
           onChange={setName} 
           required />
          
          <TextField 
           label="E-mail"
            type="email"
            id="email"
            value={email}
            onChange={setEmail}
            required
          />
          
          <TextField 
            label="Senha"
            type="password"
            id="password"
            value={password}
            onChange={setPassword}
            required
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
}

export default Register;
