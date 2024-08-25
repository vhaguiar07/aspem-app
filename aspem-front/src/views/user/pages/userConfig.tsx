import React, { useState, useEffect } from 'react';
import { fetchUserById, updateUser } from '../userApi';
import { User } from '../types';
import { useParams } from 'react-router-dom';
import { Icon, Button, Intent } from '@blueprintjs/core';
import './userConfigStyles.css';

const UserConfigPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      if (id) {
        try {
          const userData = await fetchUserById(id);
          setUser(userData);
        } catch (error) {
          setError('Erro ao buscar as configurações do usuário.');
          console.error(error);
        }
      } else {
        setError('ID do usuário não fornecido.');
      }
    };

    loadUser();
  }, [id]);

  const handleAdminToggle = async () => {
    if (id && user) {
      try {
        const updatedUser = await updateUser(id, { isAdmin: !user.isAdmin });
        setUser(updatedUser);
      } catch (error) {
        setError('Erro ao atualizar permissões de admin.');
        console.error(error);
      }
    }
  };

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
          type="button"
          intent={Intent.PRIMARY}
          style={{ marginTop: 'unset', marginBottom: '20px' }}
          onClick={handleAdminToggle}
        >
          {user.isAdmin ? 'Remover permissões de admin' : 'Dar permissões de admin'}
        </Button>
      </div>
      <div className="button-div">
        <Button
          type="button"
          intent={Intent.DANGER}
          style={{ marginTop: 'unset', marginBottom: '20px' }}
          // Implementar lógica de exclusão se necessário
        >
          Excluir
        </Button>
      </div>
    </div>
  );
};

export default UserConfigPage;
