import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './LogoutConfirmation.css';

interface LogoutConfirmationProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutConfirmation: React.FC<LogoutConfirmationProps> = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div className="modal-overlay">
        <div className="modal-content">
          <p>Você tem certeza que deseja sair?</p>
          <div className="modal-actions">
            <button className="btn btn-danger" onClick={onConfirm}>
              Sair
            </button>
            <button className="btn btn-secondary" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default LogoutConfirmation;
