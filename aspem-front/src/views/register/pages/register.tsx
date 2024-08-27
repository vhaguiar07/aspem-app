import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { registerUserAsync } from '../reducer';
import { RegisterUserData } from '../types';
import { Link } from 'react-router-dom';
import { Button, Intent } from '@blueprintjs/core';
import './registerStyles.css';

const RegisterPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, success } = useSelector((state: RootState) => state.register);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem.');
    } else {
      setPasswordError(null);
    }
  }, [password, confirmPassword]);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (passwordError) {
      console.error(passwordError);
      return;
    }

    const userData: RegisterUserData = { username, password };

    try {
      await dispatch(registerUserAsync(userData)).unwrap();
    } catch (err) {
      console.error('Failed to register:', err);
    }
  };

  return (
    <div>
      {success && <p>Usuário registrado com sucesso!</p>}
      {error && <p>Erro: {error}</p>}

      <div className="form-container-register">
        <form className="form-register" onSubmit={handleRegister}>
          <div className="register-div">
            <h1 className="h1-register">Criar conta</h1>

            <div className="register-fields">
              <div className="nice-form-group register">
                <input 
                  id="username" 
                  name="username" 
                  className="nice-input" 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Usuário"
                  required 
                />
              </div>

              <div className="nice-form-group register">
                <input 
                  id="password" 
                  name="password" 
                  className="nice-input" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  required 
                />
              </div>

              <div className="nice-form-group register">
                <input 
                  id="confirm-password" 
                  name="confirmPassword" 
                  className="nice-input" 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme a Senha"
                  required 
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
              </div>
            </div>

            <div className="button-div register">
              <Button type="submit" intent={Intent.PRIMARY} disabled={!!passwordError || loading}>
                Criar conta
              </Button>
            </div>

            <p className="register-link">
              Já possui uma conta? Clique <Link to="/login"> aqui </Link> para entrar
            </p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
