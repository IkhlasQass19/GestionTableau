import React, { useState } from 'react';
import '../Style/ArtistList.css';
import img1 from '../images/charb.png';
import img2 from '../images/charles-addams.png';
import img3 from '../images/enki-bilal.png';
import img4 from '../images/eric-carle.png';
import img5 from '../images/janry.png';
import img6 from '../images/philippe-bercovici.png'
const MostPopularArtists = () => {
  const popularArtists = [
    {
      id: 1,
      name: 'Charb',
      image: img1,
      description: 'France 1967 • 2015 Dessinateurs de presse',
    },
    {
      id: 2,
      name: 'Charles Addams',
      image: img2,
      description: 'États-Unis 1912 • 1988 Dessinateurs de bande dessinée',
    },
    {
      id: 3,
      name: 'Enki Bilal',
      image: img3,
      description: 'France 1951 Dessinateurs de bande dessinée',
    },
    {
        id: 4,
        name: 'Aeric carle',
        image: img4,
        description: 'États-Unis 1929 • 2021 Écrivains.',
      },
      {
        id: 5,
        name: 'Janry',
        image: img5,
        description: 'Belgique 1957 Dessinateurs de bande dessinée',
      },
      {
        id: 6,
        name: 'Philippe Bercovici',
        image: img6,
        description: 'France 1963 Dessinateurs de bande dessinée',
      },
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
        {popularArtists.slice(scrollIndex * 4, (scrollIndex + 10) * 4).map((artist) => (
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
