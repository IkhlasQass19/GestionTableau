import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../Style/DemandesList.css';
import axios from 'axios';
const DemandesList = ({ demandes }) => {
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const [selectedDemandId, setSelectedDemandId] = useState(null);
  const handleAccept = (demande) => {
    setSelectedDemandId(demande.iddemande); 
    setShowConfirmBox(true);
  };

  const handleRefuse = (demande) => {
    setSelectedDemandId(demande.iddemande); 
    setShowConfirmBox(true);
  };

  const confirmAccept = () => {
    axios.put('http://localhost:8080/admin/AOR', null, {
      params: {
        id:selectedDemandId,
        nv: "accepte"
      }
    })
    setShowConfirmBox(false);
    setSelectedDemandId(null);
    window.location.reload();

  };

  const confirmRefuse = () => {
    axios.put('http://localhost:8080/admin/AOR', null, {
      params: {
        id:selectedDemandId,
        nv: "refuse"
      }
    })
    setShowConfirmBox(false);
    setSelectedDemandId(null);
    window.location.reload();
  };

  return (
    <div className="demandes-list">
      <table>
        <thead>
          <tr>
            
            <th>Artiste</th>
            <th>Tableau</th>
            <th>Dimenssion</th>
            <th>Prix</th>
            <th>Client</th>
            <th>Adreess</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande) => (
            <tr key={demande.id}>
              <td>{demande.tableau.artiste}</td>
              <td>{demande.tableau.titre}</td>
              <td>{demande.tableau.longeur}x{demande.tableau.largeur}</td>
              <td>{demande.tableau.prix} MAD</td>
              <td>{demande.client.nom} {demande.client.prenom}</td>
              <td>{demande.client.address}</td>
              <td>{demande.client.email}</td>
              <td>
                <div className="actions">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="accept-icon"
                    onClick={() => handleAccept(demande)}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="refuse-icon"
                    onClick={() => handleRefuse(demande)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfirmBox && (
        <div className="confirm-box">
          <div className="confirm-content">
            <p>Êtes-vous sûr de vouloir effectuer cette action ?</p>
            <div className="confirm-buttons">
              <button className="accept" onClick={confirmAccept}>
                Accepter
              </button>
              <button className="refuse" onClick={confirmRefuse}>
                Refuser
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemandesList;
