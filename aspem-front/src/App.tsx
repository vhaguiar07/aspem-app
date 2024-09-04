import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/home/pages/home';
import CustomerDetailsPage from './views/customer/pages/customerDetails';
import UserPage from './views/user/pages/user';
import LoginPage from './views/auth/pages/login';
import RegisterPage from './views/register/pages/register';
import Sidebar from './components/sidebar/Sidebar';
import { USERS } from './views/user/routes';
import { USERS_CONFIG } from './views/user/routes';
import { LOGIN } from './views/auth/routes';
import { REGISTER } from './views/register/routes';
import './styles/global.css';
import PrivateRoute from './components/routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthNotifier from './components/auth/AuthNotifier';
import AutarquiaNotifier from './components/autarquias/AutarquiaNotifier';
import { ADD_AUTARQUIAS, AUTARQUIAS } from './views/autarquia/routes';
import AutarquiaPage from './views/autarquia/pages/Autarquia';
import AddAutarquia from './views/autarquia/pages/AddAutarquia';
import UpdateAutarquia from './views/autarquia/pages/UpdateAutarquia';
import EstadoNotifier from './components/estados/EstadoNotifier';
import { ADD_ESTADOS, ESTADOS } from './views/estado/routes';
import EstadoPage from './views/estado/pages/Estado';
import AddEstado from './views/estado/pages/AddEstado';
import UpdateEstado from './views/estado/pages/UpdateEstado';
import useAuth from './hooks/useAuth';
import UserConfigPage from './views/user/pages/userConfig';
import UserNotifier from './components/user/UserNotifier';
import RegisterNotifier from './components/register/RegisterNotifier';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && <Sidebar className="sidebar" />}
        <div className="content">
          <Routes>
            <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
            <Route path='/customers/:id' element={<PrivateRoute element={<CustomerDetailsPage />} />} />
            <Route path={USERS()} element={<PrivateRoute element={<UserPage />} />} />
            <Route path={USERS_CONFIG()} element={<PrivateRoute element={<UserConfigPage />} />} />
            <Route path={AUTARQUIAS()} element={<PrivateRoute element={<AutarquiaPage />} />} />
            <Route path={ESTADOS()} element={<PrivateRoute element={<EstadoPage />} />} />
            <Route path='/autarquias/:id' element={<PrivateRoute element={<UpdateAutarquia />} />} />
            <Route path='/estados/:id' element={<PrivateRoute element={<UpdateEstado />} />} />
            <Route path={ADD_AUTARQUIAS()} element={<PrivateRoute element={<AddAutarquia />} />} />
            <Route path={ADD_ESTADOS()} element={<PrivateRoute element={<AddEstado />} />} />
            <Route path={LOGIN()} element={<LoginPage />} />
            <Route path={REGISTER()} element={<RegisterPage />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
      <AuthNotifier />
      <AutarquiaNotifier />
      <EstadoNotifier />
      <UserNotifier />
      <RegisterNotifier />
    </Router>
  );
};

export default App;
