import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { registerUserAsync } from '../reducer';
import { RegisterUserData, SearchResult } from '../types'; // Importe o novo tipo
import { Link } from 'react-router-dom';
import { Button, Intent } from '@blueprintjs/core';
import { searchByNomeSocioOrCpf } from '../registerApi';
import './registerStyles.css';

const RegisterPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state: RootState) => state.register);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]); // Defina o tipo aqui

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    const userData: RegisterUserData = { username, password, confirmPassword };

    try {
      await dispatch(registerUserAsync(userData)).unwrap();
    } catch (err) {
      console.error('Failed to register:', err);
    }
  };

  const handleSearch = async () => {
    try {
      const results = await searchByNomeSocioOrCpf(searchQuery);
      setSearchResults(results);
    } catch (err) {
      console.error('Failed to search:', err);
    }
  };

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}

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
              </div>

              <div className="nice-form-group register">
                <input 
                  id="search" 
                  name="search" 
                  className="nice-input" 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por nome ou CPF"
                />
                <Button onClick={handleSearch} intent={Intent.PRIMARY} loading={loading}>
                  Buscar
                </Button>
              </div>

              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>{result.nomeSocio} - {result.cpf}</li>
                ))}
              </ul>
            </div>

            <div className="button-div register">
              <Button type="submit" intent={Intent.PRIMARY} loading={loading}>
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
