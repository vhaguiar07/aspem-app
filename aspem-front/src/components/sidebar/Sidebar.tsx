import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from '@blueprintjs/core';
import { logout } from '../../views/auth/reducer';
import { useNavigate } from 'react-router-dom';
import LogoutConfirmation from '../logout/LogoutConfirmation';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);

  const handleLogoutClick = () => {
    setLogoutConfirmationOpen(true);
  };

  const handleConfirmLogout = () => {
    // Primeiro, desative o modal
    setLogoutConfirmationOpen(false);
  
    // Em seguida, adicione um atraso antes de redirecionar
    setTimeout(() => {
      dispatch(logout());
      navigate('/login');
    }, 300); // O atraso deve corresponder ao tempo da animação de saída
  };

  const handleCancelLogout = () => {
    setLogoutConfirmationOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleUserClick = () => {
    navigate('/users');
  };

  return (
    <div className={`sidebar ${className}`}>
      <Button minimal={true} className="add-button">
        <Icon icon="plus" iconSize={20} color='#1a4870' />
      </Button>
      <div className="sidebar-item" onClick={handleHomeClick}>
        <Icon icon="home" size={20} color='white' />
        <span>Home</span>
      </div>
      <div className="sidebar-item" onClick={handleUserClick}>
        <Icon icon="person" size={20} color='white' />
        <span>Usuários</span>
      </div>
      <div className="sidebar-item" onClick={handleLogoutClick}>
        <Icon icon="log-out" size={20} color='white' />
        <span>Logout</span>
      </div>

      <LogoutConfirmation
        isOpen={isLogoutConfirmationOpen}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </div>
  );
};

export default Sidebar;
