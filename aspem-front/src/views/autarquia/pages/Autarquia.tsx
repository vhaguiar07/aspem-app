import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAutarquias } from '../autarquiaApi';
import { Autarquia } from '../types';
import { Icon, Button, Intent } from '@blueprintjs/core';
import './autarquiaStyles.css';

const AutarquiaPage: React.FC = () => {
  const [autarquias, setAutarquias] = useState<Autarquia[]>([]);
  const [filteredAutarquias, setFilteredAutarquias] = useState<Autarquia[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadAutarquias = async () => {
      try {
        const autarquiasData = await fetchAutarquias(`/autarquias?page=${page}&limit=${limit}`);
        setAutarquias(autarquiasData);
        setFilteredAutarquias(autarquiasData);
      } catch (error) {
        setError('Erro ao buscar autarquias.');
        console.error(error);
      }
    };

    loadAutarquias();
  }, [page, limit]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredAutarquias(
        autarquias.filter(
          autarquia =>
            autarquia.nomeSocio.toLowerCase().includes(searchTerm.toLowerCase()) ||
            autarquia.cpf.includes(searchTerm)
        )
      );
    } else {
      setFilteredAutarquias(autarquias);
    }
  }, [searchTerm, autarquias]);

  const handleAddAutarquiaClick = () => {
    navigate('/autarquias/add');
  };

  const handleEdit = (id: string) => {
    navigate(`/autarquias/${id}`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  };

  return (
    <div className="autarquia-page">
      <div className="search-container">
        <div className="nice-form-group">
          <input
            type="search"
            placeholder="Nome/CPF"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="div-title">
        <h1>Autarquias</h1>
      </div>
      <div className="button-div">
        <Button
          type="submit"
          intent={Intent.PRIMARY}
          style={{ marginTop: 'unset', marginBottom: '20px' }}
          onClick={handleAddAutarquiaClick}
        >
          Adicionar Servidor
        </Button>
      </div>
      {error && <p>{error}</p>}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nome Socio</th>
              <th>CPF</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredAutarquias.map(autarquia => (
              <tr key={autarquia.id}>
                <td>{autarquia.nomeSocio}</td>
                <td>{autarquia.cpf}</td>
                <td>
                  <Icon icon="edit" className="edit-icon" onClick={() => handleEdit(autarquia.id)} />
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

export default AutarquiaPage;
