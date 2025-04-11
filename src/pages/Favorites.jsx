import { useFavorites } from '../context/FavoritesContext';
import PokemonCard from '../components/PokemonCard';

export default function Favorites() {
  const { favorites } = useFavorites();

  console.log("Favoritos:", favorites);
  return (
    <div className="container">
    <h2 className="pokemon-title">♥️ Tus Pokémon favoritos ♥️</h2>
    {favorites.length === 0 ? (
      <p className="text-center">No has añadido ningún favorito aún.</p>
    ) : (
      <div className="row justify-content-center">
        {favorites.map((p) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4" key={p.name}>
            <PokemonCard name={p.name} image={p.image} types={p.types} />
          </div>
        ))}
      </div>
    )}
  </div>
  );
}
