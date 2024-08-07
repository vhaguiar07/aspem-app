import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/home/pages/home';
import UserPage from './views/user/pages/user';
import { USERS } from './views/user/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={USERS()} element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
