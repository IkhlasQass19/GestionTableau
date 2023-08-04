import React, { useState } from 'react';
import '../Style/TrendingArtworks.css';
import img1 from '../images/tableau1.png';
import img2 from '../images/tableau2.png';
import img3 from '../images/tableau3.png';
import img4 from '../images/tableau4.png';
import img5 from '../images/tableau5.png';
import img6 from '../images/tableau6.png';
import img7 from '../images/tableau7.png';
import img8 from '../images/tableau8.png';
import img9 from '../images/tableau9.png';
const TrendingArtworks = () => {
  const artworks = [
    {
      id: 1,
      title: 'Tableau 1',
      image: img1,
      Nom: 'Nom: Tableaux',
     
    },
    {
      id: 2,
      title: 'Tableau 2',
      image: img2,
      Nom: 'Nom: Tableaux',
     
    },
    {
      id: 3,
      title: 'Tableau 3',
      image: img3,
      Nom: 'Nom: Tableaux',
     
    },
    {
      id: 4,
      title: 'Tableau 3',
      image: img4,
      Nom: 'Nom: Tableaux',
     
    },
    {
      id: 5,
      title: 'Tableau 3',
      image: img5,
      Nom: 'Nom: Tableaux',
     
    },
    {
      id: 6,
      title: 'Tableau 3',
      image: img6,
      Nom: 'Nom: Tableaux',
     
    },
    {
      id: 7,
      title: 'Tableau 3',
      image: img7,
      Nom: 'Nom: Tableaux',
     
    },
    {
      id: 8,
      title: 'Tableau 3',
      image: img8,
      Nom: 'Artiste: Elblidi Abdeljalil et  Nom: Tableaux',
     
    },
    {
      id: 9,
      title: 'Tableau 3',
      image: img9,
      Nom: 'Artiste: Elblidi Abdeljalil et  Nom: Tableaux',
     
    },
  ];

  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const openArtworkInfo = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const closeArtworkInfo = () => {
    setSelectedArtwork(null);
  };

  return (
    <div className="trending-artworks">
      {artworks.map((artwork) => (
        <div
          key={artwork.id}
          className="artwork"
          onMouseEnter={() => openArtworkInfo(artwork)}
          onMouseLeave={closeArtworkInfo}
        >
          <div className="artist-image">
            <img src={artwork.image} alt={artwork.title} />
            {selectedArtwork && selectedArtwork.id === artwork.id && (
              <div className="artwork-Nom">
                <p>{artwork.Nom }</p>
             
              </div>
            )}
          </div>
          <div className="artwork-title">{artwork.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TrendingArtworks;
