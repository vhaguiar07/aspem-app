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
  const navigate = useNavigate();

  const handleAddAutarquiaClick = () => {
    navigate('/autarquias/add');
  };

  const handleEdit = (id: string) => {
    navigate(`/autarquias/${id}`);
  };

  useEffect(() => {
    const loadAutarquias = async () => {
      try {
        const autarquiasData = await fetchAutarquias('/autarquias');
        setAutarquias(autarquiasData);
        setFilteredAutarquias(autarquiasData);
      } catch (error) {
        setError('Erro ao buscar autarquias.');
        console.error(error);
      }
    };

    loadAutarquias();
  }, []);

  return (
    <div className="autarquia-page">
      <div className="search-container">
        <div className="nice-form-group">
          <input type="search" placeholder="Nome/CPF" value="" />
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
    </div>
  );
};

export default AutarquiaPage;
