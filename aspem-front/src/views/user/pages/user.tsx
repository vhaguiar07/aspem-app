import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../userApi';
import { User } from '../types';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        // Define a URL diretamente
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
    <div>
      <h1>Lista de Usuários</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.nomeCompleto} - {user.cpf}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
