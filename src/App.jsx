import React, { useState } from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from './Components/Regist';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('login'); // login, register, profile

  const handleLogin = () => {
    setIsLoggedIn(true);
    setView('profile');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('login');
  };

  return (
    <div>
      {view === 'login' && <Login onLogin={handleLogin} onRegister={() => setView('register')} />}
      {view === 'register' && <Register onRegister={() => setView('login')} />}
      {view === 'profile' && <Profile onLogout={handleLogout} />}
    </div>
  );
};

export default App;
