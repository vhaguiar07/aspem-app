import React, { useState, useEffect } from 'react';
import { fetchUserById } from '../userApi';
import { User } from '../types';
import { useParams } from 'react-router-dom';
import { Icon, Button, Intent } from '@blueprintjs/core';
import './userConfigStyles.css';

const UserConfigPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        if (id) {
          const userData = await fetchUserById(id);
          setUser(userData);
        }
      } catch (error) {
        setError('Erro ao buscar as configurações do usuário.');
        console.error(error);
      }
    };

    loadUser();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="user-config-page">
      <div className="div-title">
        <h1>Configurações do Usuário</h1>
      </div>
      <div className="user-details">
        <h2>{user.username}</h2>
        <p><strong>Admin:</strong> {user.isAdmin ? 'Sim' : 'Não'}</p>
        <p><strong>Criado em:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        <p><strong>Atualizado em:</strong> {new Date(user.updatedAt).toLocaleDateString()}</p>
      </div>
      <div className="button-div">
        <Button
          type="submit"
          intent={Intent.PRIMARY}
          style={{ marginTop: 'unset', marginBottom: '20px' }}
          // onClick={handleAddAutarquiaClick}
        >
          Editar
        </Button>
      </div>
      <div className="button-div">
        <Button
          type="submit"
          intent={Intent.PRIMARY}
          style={{ marginTop: 'unset', marginBottom: '20px' }}
          // onClick={handleAddAutarquiaClick}
        >
          Excluir
        </Button>
      </div>
    </div>
  );
};

export default UserConfigPage;
