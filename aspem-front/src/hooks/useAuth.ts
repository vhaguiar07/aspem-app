import { useSelector } from 'react-redux';
import { RootState } from '../store';

const useAuth = () => {
  const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);

  return { isAuthenticated };
};

export default useAuth;
