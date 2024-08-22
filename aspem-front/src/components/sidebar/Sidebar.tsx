import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from '@blueprintjs/core';
import { logout } from '../../views/auth/reducer';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
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
      <div className="sidebar-item" onClick={handleLogout}>
        <Icon icon="log-out" size={20} color='white' />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
