import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/home/pages/home';
import UserPage from './views/user/pages/user';
import Sidebar from './components/sidebar/Sidebar'; // Ajuste o caminho conforme necessário
import { USERS } from './views/user/routes';
import './styles/global.css'; // Importa o CSS global

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar className="sidebar" />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={USERS()} element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
