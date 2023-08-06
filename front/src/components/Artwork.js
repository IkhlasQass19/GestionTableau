import React from 'react';
import '../Style/Artwork.css'
import { Link } from 'react-router-dom';
const Artwork = ({ artwork}) => {
  const { id, title, artist, price, image } = artwork;

  return (
    <div className="artwork1">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>${price}</p>
      <Link to={`/tableau/${artwork.id}`}><button>Voir les détails</button></Link>
    </div>
  );
};

export default Artwork;
