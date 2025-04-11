// src/App.jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import FavoritesPage from './pages/Favorites';
import HomePage from './pages/Home';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* HEADER */}
        <NavBar className="bg-warning py-3 border-bottom">
          <div className="container d-flex justify-content-between align-items-center">
            <h1 className="fs-4 fw-bold m-0">EduZu Poké</h1>
            <nav>
              <Link to="/" className="btn btn-link">Inicio</Link>
              <Link to="/pokemon" className="btn btn-link">Pokémon</Link>
              <Link to="/favoritos" className="btn btn-link">Favoritos</Link>
            </nav>
          </div>
        </NavBar>

        {/* MAIN */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon" element={<PokemonList />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="custom-footer">
          <div className="container">
            &copy; {new Date().getFullYear()} EduZu Poké.
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="pokeball" />
            ¡Hazte con todos!
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="pokeball" />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

