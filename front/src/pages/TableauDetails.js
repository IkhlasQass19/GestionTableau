import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Importez la bibliothèque Axios
import '../Style/TableauDetails.css';
import CustomerInfoModal from '../components/CustomerInfoModal';
const TableauDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tableau, setTableau] = useState({}); 
    const handleAchat = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitModal = (customerInfo) => {
        // Gérez l'envoi des informations du client ici
        console.log('Informations du client:', customerInfo);
    };
    const { id } = useParams();
    console.log('TableauDetails id:', id);
    useEffect(() => {
        // Effectuer l'appel HTTP pour obtenir les détails du tableau
        axios.get(`http://localhost:8080/details/?id=${id}`)
            .then(response => {
                setTableau(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des détails du tableau:', error);
            });
    }, [id]); // Exécuter l'effet lorsque l'ID change


    const img= process.env.PUBLIC_URL + '/imagestableau/' + tableau.chemin;
    console.log(img);
    return (
        <div className="tableau-details">
            <div className="image-container">
                <img src={img} alt={tableau.titre} />
            </div>
            <div className="info-container">
                <h2>{tableau.titre}</h2>
                <div className='Descreption'>
                    <h3>Artiste  : </h3><p> {tableau.artiste}</p>
                </div>
                <div className='Descreption'>
                    <h3>Dimensions : </h3> <p>{tableau.longeur} x {tableau.largeur}</p>
                </div>
                <div className='Descreption'>
                    <h3>Année d'exécution :</h3><p> {tableau.annne}</p>
                </div>
                <div className='Descreption'>
                    <h3>Prix : </h3><p>{tableau.prix} MAD</p>
                </div>
                <div className='Descreption'>
                    <h3>Année d'exécution :</h3><p> {tableau.annee}</p>
                </div>
                <div className='Descreption'>
                    <h3> Description:</h3><p>{tableau.description}</p>
                </div>
                <button className='add-to-cart-button' onClick={handleAchat}>Acheter</button>
            </div>
            <CustomerInfoModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitModal} />

        </div>

    );
};

export default TableauDetails;
