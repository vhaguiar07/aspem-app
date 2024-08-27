import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toast } from 'react-toastify';
import { clearMessages } from '../../views/register/reducer';

const RegisterNotifier: React.FC = () => {
  const dispatch = useDispatch();
  const successMessage = useSelector((state: RootState) => state.register.successMessage);
  const error = useSelector((state: RootState) => state.register.error);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessages());
    }
  }, [successMessage, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearMessages());
    }
  }, [error, dispatch]);

  return null;
};

export default RegisterNotifier;
