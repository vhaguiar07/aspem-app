import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Intent } from '@blueprintjs/core';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation-page">
      <h1 className="h1-home">Selecione o banco de dados</h1>
      <div className="button-group">
        <Button
          text="Autarquias" 
          onClick={() => navigate('/autarquias')} 
          className="navigation-button"
          intent={Intent.PRIMARY}
        />
        <Button
          text="Estados" 
          onClick={() => navigate('/estados')} 
          className="navigation-button"
          intent={Intent.PRIMARY}
        />
        <Button
          text="Municípios" 
          onClick={() => navigate('/municipios')} 
          className="navigation-button"
          intent={Intent.PRIMARY}
        />
        <div className="button-div">
          <Button
            text="Banco Central" 
            onClick={() => navigate('/bc')} 
            className="navigation-button"
            intent={Intent.PRIMARY}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
