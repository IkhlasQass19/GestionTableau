import React, { useState } from 'react';
import '../Style/ArtistList.css';
import img1 from '../images/AR1.png';
import img2 from '../images/AR2.png';
import img3 from '../images/ar3.png';

const MostPopularArtists = () => {
  const popularArtists = [
    {
      id: 1,
      name: 'Artiste 1',
      image: img1,
      description: 'Description de l\'artiste populaire 1.',
    },
    {
      id: 2,
      name: 'Artiste Populaire 2',
      image: img2,
      description: 'Description de l\'artiste populaire 2.',
    },
    {
      id: 3,
      name: 'Artiste Populaire 3',
      image: img3,
      description: 'Description de l\'artiste populaire 3.',
    },
    {
        id: 4,
        name: 'Artiste Populaire 2',
        image: img2,
        description: 'Description de l\'artiste populaire 2.',
      },
      {
        id: 5,
        name: 'Artiste Populaire 3',
        image: img3,
        description: 'Description de l\'artiste populaire 3.',
      },
      {
        id: 6,
        name: 'Artiste Populaire 3',
        image: img3,
        description: 'Description de l\'artiste populaire 3.',
      },
    // ... autres artistes ...
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScrollRight = () => {
    setScrollIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(popularArtists.length / 3) - 1));
  };

  const handleScrollLeft = () => {
    setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="popular-artists">
      <button className="scroll-button left" onClick={handleScrollLeft}>
        &#8249;
      </button>
      <div className="artist-list">
        {popularArtists.slice(scrollIndex * 3, (scrollIndex + 1) * 3).map((artist) => (
          <div key={artist.id} className="popular-artist">
            <div className="artist-image">
              <img src={artist.image} alt={artist.name} />
              <div className="artist-description">{artist.description}</div>
            </div>
            <div className="artist-name">{artist.name}</div>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={handleScrollRight}>
        &#8250;
      </button>
    </div>
  );
};

export default MostPopularArtists;
