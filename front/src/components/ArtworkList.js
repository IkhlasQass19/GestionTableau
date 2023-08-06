import React from 'react';
import Artwork from './Artwork';
import '../Style/Artwork.css'

const ArtworkList = ({ artworks}) => {
  const chunkSize = 5; // Nombre d'éléments par rangée
  const chunkedArtworks = [];

  for (let i = 0; i < artworks.length; i += chunkSize) {
    chunkedArtworks.push(artworks.slice(i, i + chunkSize));
  }

  return (
    <div className="artwork1-list">
      {chunkedArtworks.map((chunk, index) => (
        <div className="row" key={index}>
          {chunk.map(artwork => (
            <Artwork key={artwork.id} artwork={artwork}/>
          ))}
        </div>
      ))}
    </div>
  );
};


export default ArtworkList;
