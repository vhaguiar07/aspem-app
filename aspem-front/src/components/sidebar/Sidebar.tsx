import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './Sidebar.css';

interface SidebarProps {
  className?: string; // Permite que a className seja opcional
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    return (
        <div className="sidebar">
            <Button minimal={true} className="add-button">
                <Icon icon="plus" iconSize={20} color='#1a4870'/>
            </Button>
            <div className="sidebar-item">
                <Icon icon="people" size={20} color='white' />
                <span>Servidores</span>
            </div>
            <div className="sidebar-item">
                <Icon icon="person" size={20} color='white' />
                <span>Usuários</span>
            </div>
        </div>
    );
};

export default Sidebar;
