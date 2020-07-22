import React from 'react';
import api from '../services/api';

export const RegisterUser = async (username,email, password ) => {
  const body = {
    username: username,
    email: email,
    password: password,
    
  };

  try {
    console.log(body);
    await api.post('/signup', body);
    return console.log('feito, tio!');
  } catch ({ response }) {
    console.log(response.data.message);
    console.log('é deu ruim irmão!');
  }
};
