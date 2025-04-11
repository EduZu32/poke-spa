import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="pokemon-navbar">
      <div className="navbar-container">
      <h1 className="navbar-title m-0 d-flex align-items-center gap-2">
        <span className="poke-emoji">🕹️</span>
        <span className="poke-title">¡EduZu Poké SPA!</span>
        <span className="poke-emoji">🕹️</span>
      </h1>
        <div className="navbar-links">
          <Link to="/" className="pokemon-btn">Inicio</Link>
          <Link to="/pokemon" className="pokemon-btn">Pokémon</Link>
          <Link to="/favorites" className="pokemon-btn">Favoritos</Link>
        </div>
      </div>
    </nav>
  );
}
