import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store';
import { setUsername, setPassword, loginSuccess, loginFailure, clearMessages } from '../reducer';
import { loginUser } from '../loginApi';
import { LoginState } from '../types';
import useAuth from '../../../hooks/useAuth';
import { Button, Intent } from '@blueprintjs/core';
import './loginStyles.css';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { username, password } = useSelector((state: RootState) => state.login as LoginState);

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
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      dispatch(loginFailure(errorMessage));
      console.error('Erro ao realizar login:', error);
    }
  };

  return (
    <div>
      <div className="form-container">
      <form className="form-login" onSubmit={handleLogin}>
        <div className="login-div">
          <h1 className="h1-login">Login</h1>

          <div className="login-fields">
            <div className="nice-form-group login">
              <input 
                id="username" 
                name="username" 
                className="nice-input" 
                type="text"
                value={username}
                onChange={(e) => dispatch(setUsername(e.target.value))}
                placeholder="Usuário"
                required 
              />
            </div>

            <div className="nice-form-group login">
              <input 
                id="password" 
                name="password" 
                className="nice-input" 
                type="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                placeholder="Senha"
                required 
              />
            </div>
          </div>

          <div className="button-div login">
            <Button type="submit" intent={Intent.PRIMARY}>
              Entrar
            </Button>
          </div>

          <p className="register-link">
            Não possui uma conta? Clique <Link to="/register"> aqui </Link> para criar uma
          </p>

        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
