import React, { useState, useEffect } from 'react';
import { fetchCustomers } from '../customerApi';
import { Customer } from '../types';
import { Icon } from '@blueprintjs/core'; // Importa o componente de ícone
import './styles.css';

const CustomerPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const customersData = await fetchCustomers('/customers');
        setCustomers(customersData);
        setFilteredCustomers(customersData);
      } catch (error) {
        setError('Erro ao buscar clientes.');
        console.error(error);
      }
    };

    loadCustomers();
  }, []);

  useEffect(() => {
    setFilteredCustomers(
      customers.filter(customer =>
        customer.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, customers]);

  return (
    <div className="customer-page">
      <div className="search-container">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Pesquisar clientes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <Icon icon="search" className="search-icon" />
        </div>
      </div>
      <h1 className='list-title'>Lista de Clientes</h1>
      {error && <p>{error}</p>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.nomeCompleto}</td>
                <td>{customer.cpf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerPage;
