import React from 'react';

const Artwork = ({ artwork, addToCart }) => {
  const { id, title, artist, price, image } = artwork;

  return (
    <div className="artwork">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>${price}</p>
      <button onClick={() => addToCart(id)}>Ajouter au panier</button>
    </div>
  );
};

export default Artwork;
