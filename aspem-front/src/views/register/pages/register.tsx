import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { registerUserAsync } from '../reducer';
import { RegisterUserData } from '../types';

const RegisterPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, success } = useSelector((state: RootState) => state.register);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    const userData: RegisterUserData = { username, password };

    try {
      await dispatch(registerUserAsync(userData)).unwrap();
    } catch (err) {
      console.error('Failed to register:', err);
    }
  };

  return (
    <div>
      <h1>Registro de Novo Usuário</h1>
      {success && <p>Usuário registrado com sucesso!</p>}
      {error && <p>Erro: {error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Nome de usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrar'}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
