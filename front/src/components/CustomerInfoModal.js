import React, { useState } from 'react';
import '../Style/CustomerInfoModal.css'; // Ajoutez le style CSS de la modale
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Importez la bibliothèque Axios
const CustomerInfoModal = ({ isOpen, onClose, onSubmit }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();
    console.log('TableauDetails id:', id);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nom || !prenom || !address || !email) {
            Swal.fire({
                icon: 'warning',
                title: 'Attention',
                text: 'Remplir tous les champs',
                confirmButtonColor: '#d33',
                confirmButtonText: 'OK',
              });
              return; 
        }
        else{
        const customerInfo = { nom, prenom, address, email };
        onSubmit(customerInfo);
        try {
            const response = axios.post(`http://localhost:8080/faireoffre?id=${id}`,
                {
                    "nom": nom,
                    "prenom": prenom,
                    "address": address,
                    "email": email
                }
            );

            Swal.fire({
                icon: 'success',
                title: 'Succès',
                text: 'Votre demande d\'offre a été soumise avec succès. Vous recevrez bientôt une confirmation par email.',
                confirmButtonColor: '#2ecc71',
                confirmButtonText: 'Retour',
            });
            onClose();
        }
        catch (error) {
            console.error('Erreur lors de la soumission de la demande d\'offre:', error);
            // Gérer l'erreur si nécessaire
        }
    }
    };
    const handleCancel = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Annuler',
            text: 'Êtes-vous sûr de vouloir annuler l\'achat ?',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Oui, annuler',
            cancelButtonText: 'Non',
        }).then((result) => {
            if (result.isConfirmed) {
                onClose();
            }
        });
    };

    return (
        <div className={`customer-info-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h3 className='titr'>Formulaire d'achat</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="nom" style={{ marginTop: "12px" }}>Nom </label>
                        <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="prenom" style={{ marginTop: "12px" }}>Prénom</label>
                        <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="address" style={{ marginTop: "12px" }}>Adresse </label>
                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="email" style={{ marginTop: "12px" }}>Email </label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="button-row">
                        <button className="confirm-button" type="submit" onClick={handleSubmit}>Confirmer l'achat</button>
                        <button className="cancel-button" type="button" onClick={handleCancel}>Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomerInfoModal;
