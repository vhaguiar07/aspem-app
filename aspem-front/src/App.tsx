import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerPage from './views/customer/pages/customer';
import CustomerDetailsPage from './views/customer/pages/customerDetails';
import UserPage from './views/user/pages/user';
import LoginPage from './views/auth/pages/login';
import Sidebar from './components/sidebar/Sidebar';
import { USERS } from './views/user/routes';
import { LOGIN } from './views/auth/routes';
import './styles/global.css';
import PrivateRoute from './components/routes/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar className="sidebar" />
        <div className="content">
          <Routes>
            <Route path="/" element={<PrivateRoute element={<CustomerPage />} />} />
            <Route path='/customers/:id' element={<PrivateRoute element={<CustomerDetailsPage />} />} />
            <Route path={USERS()} element={<PrivateRoute element={<UserPage />} />} />
            <Route path={LOGIN()} element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
