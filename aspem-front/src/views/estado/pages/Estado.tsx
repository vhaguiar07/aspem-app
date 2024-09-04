import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEstados } from '../estadoApi';
import { Estado } from '../types';
import { Icon, Button, Intent } from '@blueprintjs/core';
import './estadoStyles.css';

const EstadoPage: React.FC = () => {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [filteredEstados, setFilteredEstados] = useState<Estado[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [totalItems, setTotalItems] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEstados = async () => {
      try {
        const { total, data } = await fetchEstados(`/estados?page=${page}&limit=${limit}`);
        setEstados(data);
        setFilteredEstados(data);
        setTotalItems(total);
      } catch (error) {
        setError('Erro ao buscar estados.');
        console.error(error);
      }
    };

    loadEstados();
  }, [page, limit]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredEstados(
        estados.filter(
          estado =>
            estado.nomeSocio.toLowerCase().includes(searchTerm.toLowerCase()) ||
            estado.cpf.includes(searchTerm)
        )
      );
    } else {
      setFilteredEstados(estados);
    }
  }, [searchTerm, estados]);

  const handleAddEstadoClick = () => {
    navigate('/estados/add');
  };

  const handleEdit = (id: string) => {
    navigate(`/estados/${id}`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  };

  return (
    <div className="estado-page">
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
        <h1>Estados</h1>
      </div>
      <div className="button-div">
        <Button
          type="submit"
          intent={Intent.PRIMARY}
          style={{ marginTop: 'unset', marginBottom: '20px' }}
          onClick={handleAddEstadoClick}
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
            {filteredEstados.map(estado => (
              <tr key={estado.id}>
                <td>{estado.nomeSocio}</td>
                <td>{estado.cpf}</td>
                <td>
                  <Icon icon="edit" className="edit-icon" onClick={() => handleEdit(estado.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-controls">
        <Button text="Anterior" onClick={() => handlePageChange(page - 1)} disabled={page === 1} />
        <Button text="Próximo" onClick={() => handlePageChange(page + 1)} disabled={page * limit >= totalItems} />
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

export default EstadoPage;
