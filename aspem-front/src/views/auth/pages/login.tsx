import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store';
import { setUsername, setPassword, loginSuccess, loginFailure, clearMessages } from '../reducer';
import { loginUser } from '../loginApi';
import { LoginState } from '../types';
import useAuth from '../../../hooks/useAuth';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { username, password, error, success } = useSelector((state: RootState) => state.login as LoginState);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(clearMessages());

    try {
      const token = await loginUser(username, password);
      localStorage.setItem('token', token);
      dispatch(loginSuccess('Login realizado com sucesso!'));
      navigate('/');
    } catch (error) {
      dispatch(loginFailure('Erro ao realizar login.'));
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default LoginPage;
