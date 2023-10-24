import React, { useState } from 'react';
import Application from './Application';
import Login from './Login';

function App() {
  
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };

  return (
    <div>
      { !(login) && <Login onLogin={handleLogin} />}
      { login && <Application />} 
    </div>
  );
}
export default App;
