import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCustomerById } from '../reducer';
import { RootState } from '../../../store';
import { useAppDispatch } from '../../../hooks';
import { Icon } from '@blueprintjs/core';
import './styles.css';

const CustomerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch(); // Usa o dispatch tipado
  const { customer, loading, error } = useSelector((state: RootState) => state.customer);

  useEffect(() => {
    if (id) {
      dispatch(fetchCustomerById(id));
    }
  }, [dispatch, id]);

  return (
    <div className="customer-detail-page">
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {customer && (
        <div>
          <h1>Detalhes do Cliente</h1>
          <div className="customer-detail">
            <p><strong>Nome Completo:</strong> {customer.nomeCompleto}</p>
            <p><strong>CPF:</strong> {customer.cpf}</p>
            {/* Adicione outros detalhes conforme necessário */}
          </div>
        </div>
      )}
      {!loading && !customer && <p>Nenhum cliente encontrado.</p>}
    </div>
  );
};

export default CustomerDetailPage;
