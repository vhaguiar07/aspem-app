const useAuth = () => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  return { isAuthenticated };
};

export default useAuth;
