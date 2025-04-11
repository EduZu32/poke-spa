import './pokemon-card.css';
import typeColors from '../utils/typeColors';
import typeIcons from '../utils/typeIcons';

import { useFavorites } from '../context/FavoritesContext';

export default function PokemonCard({ name, image, types =[] }) {

  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.find((p) => p.name === name);

  return (
<div className="card pokemon-card text-center shadow-sm">
  <div className="card-header">
    <h5 className="card-title text-capitalize mb-0">{name}</h5>
  </div>

  <img src={image} className="card-img-top" alt={name} />

  <div className="card-body">
    <div className="mb-2">
    {types.map((type) => (
  <span
    key={type}
    className="type-pill"
    style={{
      backgroundColor: typeColors[type.toLowerCase()],
    }}
  >
    <span className="type-icon">{typeIcons[type.toLowerCase()]}</span>
    <span className="type-label">{type}</span>
  </span>
))}



    </div>

    <button
  className={`fav-btn ${isFavorite ? 'remove' : 'add'}`}
  onClick={() =>
    isFavorite ? removeFavorite(name) : addFavorite({ name, image, types })
  }
>
  <span role="img" aria-label="pokeball"></span> {isFavorite ? 'Quitar' : 'Favorito'}
</button>

  </div>
</div>

  );
}
