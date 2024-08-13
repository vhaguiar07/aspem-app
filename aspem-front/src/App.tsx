import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerPage from './views/customer/pages/customer';
import CustomerDetailsPage from './views/customer/pages/customerDetails';
import UserPage from './views/user/pages/user';
import Sidebar from './components/sidebar/Sidebar';
import { USERS } from './views/user/routes';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar className="sidebar" />
        <div className="content">
          <Routes>
            <Route path="/" element={<CustomerPage />} />
            <Route path='/customers/:id' element={<CustomerDetailsPage />} />
            <Route path={USERS()} element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
