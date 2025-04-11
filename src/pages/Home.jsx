import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="welcome-box p-4 rounded shadow-lg bg-warning-subtle border border-warning-subtle">
        <h1 className="display-5 fw-bold mb-3">
          👋 ¡Bienvenido/a a <span className="text-primary">EduZu Poké</span>!
        </h1>
        <p className="lead">
          Explora el mundo Pokémon, agrega tus favoritos y crea tu propia Pokédex.  
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <Link to="/pokemon" className="btn btn-primary btn-lg shadow">
            🧭 Explorar Pokémon
          </Link>
          <Link to="/favorites" className="btn btn-danger btn-lg shadow">
            ❤️ Ver Favoritos
          </Link>
        </div>
      </div>

      <div className="mt-5">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
          width="400"
          className="img-fluid animate__animated animate__bounce"
        />
      </div>
    </div>
  );
}
