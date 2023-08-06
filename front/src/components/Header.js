import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert library
import logoImage from '../images/logo.png';

const Header = () => {

  const handleLogout = () => {
    Swal.fire({
      icon: 'question',
      title: 'Déconnexion',
      text: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, déconnectez-moi',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the role value from local storage
        localStorage.removeItem('role');
        window.location.reload(); // Reload the page to reflect the changes
      }
    });
  }
  const role = localStorage.getItem('role'); 
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
          {role === 'admin' && ( 
            <>
              <li className="nav-item">
                <Link to="/demande">Liste des demandes</Link>
              </li>
              <li className="nav-item">
                <Link to="/Addtable">Ajouter un tableau</Link>
              </li>
              <li className="nav-item">
              <Link to="" onClick={handleLogout}>Se déconnecter</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="logo">
        <img src={logoImage} alt="Logo de la Galerie d'Art" />
      </div>
    </header>
  );
};

export default Header;
