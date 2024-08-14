import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon } from '@blueprintjs/core';
import { logout } from '../../views/auth/reducer';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="sidebar">
      <Button minimal={true} className="add-button">
        <Icon icon="plus" iconSize={20} color='#1a4870' />
      </Button>
      <div className="sidebar-item">
        <Icon icon="people" size={20} color='white' />
        <span>Servidores</span>
      </div>
      <div className="sidebar-item">
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
