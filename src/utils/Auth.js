import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const VerifyLogged = () => {
  const history = useHistory();
  const isLogged = localStorage.getItem('token');
  useEffect(() => {
    if (isLogged === null) {
      history.push('/');
    }
  }, []);
};

export const RedirectLogged = () => {
  const history = useHistory();
  const isLogged = localStorage.getItem('token');
  useEffect(() => {
    if (!isLogged === null) {
      history.push('/feed');
    }
  }, []);
};
