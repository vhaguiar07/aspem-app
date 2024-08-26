import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, updateUser } from '../userApi';
import { User } from '../types';
import { AppDispatch, RootState } from '../../../store';
import { updateUserSuccess, setSuccessMessage, updateUserFailure, clearMessages } from '../reducer';
import { useParams } from 'react-router-dom';
import { Button, Intent } from '@blueprintjs/core';
import './userConfigStyles.css';
import axios from 'axios';

const UserConfigPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id?: string }>();
  const [user, setUser] = useState<User | null>(null);

  const successMessage = useSelector((state: RootState) => state.user.success);
  const errorMessage = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    const loadUser = async () => {
      if (id) {
        try {
          const userData = await fetchUserById(id);
          setUser(userData);
        } catch (error) {
          dispatch(updateUserFailure('Erro ao buscar as configurações do usuário.'));
        }
      } else {
        dispatch(updateUserFailure('ID do usuário não fornecido.'));
      }
    };

    loadUser();
  }, [id, dispatch]);

  useEffect(() => {
    if (successMessage) {
      dispatch(clearMessages());
    }

    if (errorMessage) {
      dispatch(clearMessages());
    }
  }, [successMessage, errorMessage, dispatch]);

  const handleAdminToggle = async () => {
    if (id && user) {
      try {
        const updatedUser = await updateUser(id, { isAdmin: !user.isAdmin });
        dispatch(updateUserSuccess(updatedUser));
        dispatch(setSuccessMessage('Permissão alterada com sucesso'));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const errorMessage = error.response?.data?.message || 'Erro desconhecido';
          dispatch(updateUserFailure(errorMessage));
        } else {
          dispatch(updateUserFailure('Erro desconhecido'));
        }
        console.error(error);
      }
    }
  };

  if (errorMessage) {
    return <p>{errorMessage}</p>;
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
      {/* <div className="button-div">
        <Button
          type="button"
          intent={Intent.DANGER}
          style={{ marginTop: 'unset', marginBottom: '20px' }}
          // Implementar lógica de exclusão se necessário
        >
          Excluir
        </Button>
      </div> */}
    </div>
  );
};

export default UserConfigPage;
