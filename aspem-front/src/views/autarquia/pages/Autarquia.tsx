import React, { useState, useEffect } from 'react';
import { fetchAutarquias } from '../autarquiaApi';
import { Autarquia } from '../types';
import { Icon } from '@blueprintjs/core';
import './styles.css';

const AutarquiaPage: React.FC = () => {
  const [autarquias, setAutarquias] = useState<Autarquia[]>([]);
  const [filteredAutarquias, setFilteredAutarquias] = useState<Autarquia[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    setFilteredAutarquias(
      autarquias.filter(autarquia =>
        autarquia.nomeSocio.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, autarquias]);

  return (
    <div className="autarquia-page">
      <div className="search-container">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Pesquisar autarquias"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <Icon icon="search" className="search-icon" />
        </div>
      </div>
      <h1 className='list-title'>Lista de Autarquias</h1>
      {error && <p>{error}</p>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome Socio</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {filteredAutarquias.map(autarquia => (
              <tr key={autarquia.id}>
                <td>{autarquia.nomeSocio}</td>
                <td>{autarquia.cpf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AutarquiaPage;
