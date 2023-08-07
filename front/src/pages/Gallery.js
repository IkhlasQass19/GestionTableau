import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtworkList from '../components/ArtworkList';
import '../Style/Artwork.css'

const Gallery = () => {

  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    async function fetchArtworks() {
      try {
        const response = await axios.get('http://localhost:8080/voir');
        setArtworks(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des tableaux:', error);
      }
    }

    fetchArtworks();
  }, []);


  return (
    <div className="gallery">
     
      <ArtworkList artworks={artworks} />
    </div>
  );
};

export default Gallery;
