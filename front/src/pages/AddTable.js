import React, { useState } from 'react';
import '../Style/AddTable.css';
import axios from 'axios';
const AddTable = () => {


    const [nom, setNom] = useState('');
    const [artiste, setArtiste] = useState('');
    const [largeur, setLargeur] = useState('');
    const [hauteur, setHauteur] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');
    const [annee, setAnnee] = useState('');
    const [image, setImage] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('titre', nom);
        formData.append('artiste', artiste);
        formData.append('longeur', hauteur);
        formData.append('largeur', largeur);
        formData.append('description', description);
        formData.append('prix', prix);
        formData.append('annee', annee);

        try {
            const response = await axios.post('http://localhost:8080/admin/ajouter', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Tableau ajouté avec succès:', response.data);
            window.location.href = '/gallery';
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'ajout du tableau:', error);
        }
    };
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0]; // Get the selected image file
        setImage(selectedImage);    
    };
    return (
       
           
            <div className="add-demande-form">
        
            <h2>Ajouter un  nouveau tableau</h2>
        
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="nom" style={{marginTop:"12px"}}>Nom </label>
                        <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                        <label htmlFor="artiste" style={{marginTop:"12px"}}>Artiste </label>
                        <input type="text" id="artiste" value={artiste} onChange={(e) => setArtiste(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="hauteur" style={{marginTop:"12px"}}>Hauteur </label>
                        <input type="text" id="hauteur" value={hauteur} onChange={(e) => setHauteur(e.target.value)} />
                        <label htmlFor="largeur" style={{marginTop:"12px"}}>Largeur </label>
                        <input type="text" id="largeur" value={largeur} onChange={(e) => setLargeur(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="prix" style={{marginTop:"12px"}}>Prix </label>
                        <input type="text" id="prix" value={prix} onChange={(e) => setPrix(e.target.value)} />
                        <label htmlFor="annee" style={{marginTop:"12px"}}>Année </label>
                        <input type="text" id="annee" value={annee} onChange={(e) => setAnnee(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="image" style={{marginTop:"12px"}}>Hauteur </label>
                        <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="descreption" style={{marginTop:"12px"}}>Description </label>
                        <textarea id="descreption" value={description} onChange={(e) => setDescription(e.target.value)} >
                        </textarea>
                    </div>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
     
    );
};

export default AddTable;
