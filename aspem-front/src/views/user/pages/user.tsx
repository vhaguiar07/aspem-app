import React, { useState, useEffect } from 'react';
import { fetchUsers, searchUsers } from '../userApi';
import { User } from '../types';
import { Icon, Button } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    const loadUsers = async () => {
      try {
        let data;
        if (isSearching) {
          data = await searchUsers(searchQuery, token, page, limit);
        } else {
          data = await fetchUsers(`/users?page=${page}&limit=${limit}`, token);
        }
        setUsers(data.users);
        setTotal(data.total);
      } catch (error) {
        console.error(error);
      } finally {
        setTriggerSearch(false);
      }
    };

    loadUsers();
  }, [page, limit, token, triggerSearch, isSearching]);

  const handleEditClick = (userId: string) => {
    navigate(`/users/${userId}`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setPage(1);
      setIsSearching(true);
      setTriggerSearch(true);
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="user-page">
      <div className="search-container">
        <div className="nice-form-group">
          <input
            type="search"
            placeholder="Nome de usuário"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
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
        <Button
          text="Anterior"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        />
        <Button
          text="Próximo"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
        />
        <div>
          <label htmlFor="limit">Itens por página:</label>
          <select
            id="limit"
            value={limit}
            onChange={(e) => handleLimitChange(parseInt(e.target.value, 10))}
          >
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
