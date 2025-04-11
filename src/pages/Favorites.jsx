import { useFavorites } from '../context/FavoritesContext';
import PokemonCard from '../components/PokemonCard';

export default function Favorites() {
  const { favorites } = useFavorites();

  console.log("Favoritos:", favorites);
  return (
    <div>
      <h2 class="pokemon-title">♥️ Tus Pokémon favoritos ♥️</h2>
      {favorites.length === 0 ? (
        <p>No has añadido ningún favorito aún.</p>
      ) : (
        <div class="pokemon-grid" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {favorites.map((p) => (
            <PokemonCard key={p.name} name={p.name} image={p.image} types={p.types} />
          ))}
        </div>
      )}
    </div>
  );
}
