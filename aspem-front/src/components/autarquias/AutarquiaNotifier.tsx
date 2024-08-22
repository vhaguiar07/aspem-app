import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toast } from 'react-toastify';
import { clearMessages } from '../../views/autarquia/reducer';

const AutarquiaNotifier: React.FC = () => {
  const dispatch = useDispatch();
  const success = useSelector((state: RootState) => state.autarquias.success);
  const error = useSelector((state: RootState) => state.autarquias.error);

  useEffect(() => {
    if (success) {
      toast.success(success);
      dispatch(clearMessages());
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearMessages());
    }
  }, [error, dispatch]);

  return null;
};

export default AutarquiaNotifier;
