import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="welcome-box p-4 rounded shadow-lg bg-warning-subtle border border-warning-subtle">
        <h1 className="display-5 fw-bold mb-3 text-center">
          👋 ¡Bienvenido/a a <span className="text-primary">EduZu Poké</span>!
        </h1>
        <p className="lead text-center">
          Explora el mundo Pokémon, agrega tus favoritos y crea tu propia Pokédex.
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
          <Link to="/pokemon" className="btn btn-primary btn-lg shadow">
            🧭 Explorar Pokémon
          </Link>
          <Link to="/favorites" className="btn btn-danger btn-lg shadow">
            ❤️ Ver Favoritos
          </Link>
        </div>
      </div>

      <div className="d-flex justify-content-center my-4 mt-5">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
          className="img-fluid animate__animated animate__bounce"
          style={{
            maxWidth: "400px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
