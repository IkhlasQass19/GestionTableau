import React, { useState } from 'react';
import '../Style/Login.css'
import axios from 'axios';


const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:8080/admin/SeConnecter?login=' + username + '&password=' + password)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('role', 'admin');
        window.location.href = '/demande';

      })
      .catch(error => {
        setError('Identifiant ou mot de passe incorrect');
        console.error(error);
      });

  };

  return (
    <div className="admin-login">

      <div className="form">
        <h2 className="admin-title">Connexion Administrateur</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Se connecter</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
