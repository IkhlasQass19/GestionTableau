import React from 'react';
import '../Style/Artwork.css'
import { Link } from 'react-router-dom';

const Artwork = ({ artwork}) => {
  const { idtableau, titre, artiste,prix, chemin } = artwork;
  const img= process.env.PUBLIC_URL + '/imagestableau/' + chemin;
  console.log(img);
  console.log(chemin);
  console.log(titre);
  console.log(idtableau);
  console.log(artiste);

  return (
    <div className="artwork1">
      <img src={img} alt={titre}  width="10px"/>
      <h3>{artwork.titre}</h3>
      <p>{artwork.artiste}</p>
      <p>${artwork.prix}</p>
      <Link to={`/tableau/${artwork.idtableau}`}><button>Voir les détails</button></Link>
    </div>
  );
};

export default Artwork;
