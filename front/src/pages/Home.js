import React from 'react';
import ArtistList from '../components/ArtistList.js';
import TrendingArtworks from '../components/TrendingArtworks';
import '../Style/Home.css';
import IntroImage from '../images/intro.png';
const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <img src={IntroImage} alt="Introduction" />
                <div className="intro-text">
                    <h2>Bienvenue à la Galerie d'Art </h2>
                    <p>Explorez une collection d'œuvres d'art uniques et découvrez de nouveaux talents.</p>
                </div>
            </div>
            <div className="section1">
                <h2>À Propos</h2>
                <p>Découvrez l'univers fascinant de notre galerie d'art, où chaque toile, chaque sculpture et chaque photographie raconte une histoire unique. Fondée il y a plus de deux décennies, notre galerie s'est imposée comme un espace incontournable pour les passionnés d'art du monde entier.</p>
                <p>Notre mission est de mettre en lumière le génie créatif des artistes émergents et établis, en offrant un espace où leurs œuvres peuvent être admirées, discutées et acquises. Chaque pièce exposée dans notre galerie est soigneusement sélectionnée pour son originalité, son esthétique et sa capacité à susciter l'émotion.</p>
                <p>Nous croyons en la puissance de l'art pour transcender les frontières et les langues, pour évoquer des réflexions profondes et pour connecter les esprits. C'est pourquoi nous nous efforçons de créer un environnement où l'art peut être apprécié dans toute sa diversité, de la peinture traditionnelle à la photographie contemporaine, en passant par la sculpture avant-gardiste.</p>
                <p>En explorant notre galerie, vous entrerez dans un monde où l'imagination n'a pas de limites. Chaque visite est une invitation à découvrir de nouvelles perspectives, à contempler des horizons artistiques variés et à vous laisser emporter par la magie de la création.</p>
                <p>Nous vous invitons à plonger dans notre collection exceptionnelle, à vous laisser inspirer par les histoires racontées par chaque artiste et à rejoindre notre communauté passionnée d'amoureux de l'art. Bienvenue dans notre galerie, où l'art prend vie et crée des émotions durables.</p>
            </div>

            <div className="section">
                <h2>Nos Artistes</h2>
                <p>Explorez un monde de créativité et de talent avec nos artistes exceptionnels, chacun apportant sa vision unique à travers des œuvres qui captivent l'âme.</p>
                <ArtistList />
            </div>
            <div className="section">
                <h2>Tendances</h2>
                <p>Plongez dans l'univers des tableaux les plus en vogue, où chaque coup de pinceau raconte une histoire et chaque toile exprime une émotion unique.</p>
                <TrendingArtworks />
            </div>
           
        </div>
    );
};

export default Home;
