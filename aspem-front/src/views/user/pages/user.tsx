import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../userApi';
import { User } from '../types';
import { Icon, Button } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers(`/users?page=${page}&limit=${limit}`);
        setUsers(usersData);
      } catch (error) {
        setError('Erro ao buscar usuários.');
        console.error(error);
      }
    };

    loadUsers();
  }, [page, limit]);

  const handleEditClick = (userId: string) => {
    navigate(`/users/${userId}`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  };

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
                  <Icon icon="edit" className="edit-icon" onClick={() => handleEditClick(user.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-controls">
        <Button text="Anterior" onClick={() => handlePageChange(page - 1)} disabled={page === 1} />
        <Button text="Próximo" onClick={() => handlePageChange(page + 1)} />
        <div>
          <label htmlFor="limit">Itens por página:</label>
          <select id="limit" value={limit} onChange={(e) => handleLimitChange(parseInt(e.target.value, 10))}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
