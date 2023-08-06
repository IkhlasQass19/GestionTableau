import React, { useState } from 'react';
import '../Style/Login.css'
const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Ici, vous pouvez ajouter la logique d'authentification, par exemple, vérifier les informations
    // de connexion avec une API ou une base de données.
    // Pour cet exemple, nous utilisons des valeurs en dur pour démontrer le processus.

    if (username === 'admin' && password === 'password') {
      onLogin(true);
    } else {
      setError('Identifiant ou mot de passe incorrect');
    }
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
