import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../userApi';
import { User } from '../types';
import { Icon } from '@blueprintjs/core';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers('/users');
        setUsers(usersData);
      } catch (error) {
        setError('Erro ao buscar usuários.');
        console.error(error);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="user-page">
      <div className="search-container">
        <div className="nice-form-group">
          <input type="search" placeholder="Nome de usuário" value="" />
        </div>
      </div>
      <div className="div-title">
        <h1>Usuários</h1>
      </div>
      {error && <p>{error}</p>}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nome de Usuário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>
                  <Icon icon="edit" className="edit-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
