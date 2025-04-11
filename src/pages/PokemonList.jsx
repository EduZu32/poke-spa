import { useEffect, useState } from 'react';
import { getPokemonList } from '../services/pokeapi';
import PokemonCard from '../components/PokemonCard';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(20);

  const fetchData = async (newLimit) => {
    const data = await getPokemonList(newLimit);
    setPokemon(data);
  };

  useEffect(() => {
    fetchData(limit);
  }, [limit]);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 20);
  };

  return (
<div className="container">
  <h2 className="pokemon-title">
    <img src="/src/img/pokeball2.0.png" alt="pokeball" />
    Pokémon disponibles
    <img src="/src/img/pokeball2.0.png" alt="pokeball" />
  </h2>

  <div className="pokemon-grid">
    {pokemon.map((p) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={p.name}>
        <PokemonCard name={p.name} image={p.image} types={p.types} />
      </div>
    ))}
  </div>

  <div className="text-center mt-4 mb-4">
    <button className="pokemon-button mt-4" onClick={handleLoadMore}>
      Cargar más
    </button>
  </div>
</div>

  );
}

