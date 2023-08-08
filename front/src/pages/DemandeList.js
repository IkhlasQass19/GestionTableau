import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DemandesList from '../components/DemandesList';

const DemandeList = () => {
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/VoirDemmandes')
      .then(response => {
        setDemandes(response.data);
        console.log(demandes);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className="admin-dashboard">
      <DemandesList demandes={demandes} />
    </div>
  );
};

export default DemandeList;
