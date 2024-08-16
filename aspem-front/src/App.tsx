import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerPage from './views/customer/pages/customer';
import CustomerDetailsPage from './views/customer/pages/customerDetails';
import UserPage from './views/user/pages/user';
import LoginPage from './views/auth/pages/login';
import RegisterPage from './views/register/pages/register';
import Sidebar from './components/sidebar/Sidebar';
import { USERS } from './views/user/routes';
import { LOGIN } from './views/auth/routes';
import { REGISTER } from './views/register/routes';
import './styles/global.css';
import PrivateRoute from './components/routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthNotifier from './components/auth/AuthNotifier';
import { AUTARQUIAS } from './views/autarquia/routes';
import AutarquiaPage from './views/autarquia/pages/Autarquia';

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
            <Route path={AUTARQUIAS()} element={<PrivateRoute element={<AutarquiaPage />} />} />
            <Route path={LOGIN()} element={<LoginPage />} />
            <Route path={REGISTER()} element={<RegisterPage />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
      <AuthNotifier />
    </Router>
  );
};

export default App;
