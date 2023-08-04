import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Accueil</Link>
          </li>
       
          <li className="nav-item">
            <Link to="/gallery">Galerie d'Art</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin">Espace Admin</Link>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src={logoImage} alt="Logo de la Galerie d'Art" />
      </div>
    </header>
  );
};

export default Header;
