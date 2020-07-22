import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Form,
  Container,
  DivButtons,
  Header,
  Image,
  Button,
  BtnRegister,
} from './styles';
import TextField from '@material-ui/core/TextField';
import Logo from '../../components/img/logo-eddit.png';

const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token !== null) {
      history.push('/posts');
    }
  }, [history]);

  const handleUpdateEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUpdatePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(baseUrl, body);
      window.localStorage.setItem('token', response.data.token);
      alert('Sucess');
      history.push('/feed');
    } catch (error) {
      alert(error);
      alert('Login error');
    }
  };
  const goToRegister = () => {
    history.push('/registro');
  };

  return (
    <>
      <Header>
        <Image src={Logo} />
      </Header>
      <Container>
        <Form>
          <h2>Login</h2>
          <TextField
            label="email"
            required
            type="email"
            name="login"
            onChange={handleUpdateEmail}
          />

          <TextField
            required
            label="senha"
            type="password"
            name="senha"
            onChange={handleUpdatePassword}
          />
          <DivButtons>
            <BtnRegister onClick={goToRegister}>Cadastre-se</BtnRegister>
            <Button onClick={login}>Login</Button>
          </DivButtons>
        </Form>
      </Container>
    </>
  );
};

export default Login;
