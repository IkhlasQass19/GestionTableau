import React from 'react';
import Artwork from './Artwork';

const ArtworkList = ({ artworks, addToCart }) => {
  return (
    <div className="artwork-list">
      {artworks.map(artwork => (
        <Artwork key={artwork.id} artwork={artwork} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ArtworkList;
