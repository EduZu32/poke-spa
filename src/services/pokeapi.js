export const getPokemonList = async (limit = 50) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    const data = await response.json();

    const detailedPokemon = await Promise.all(
      data.results.map(async (p) => {
        try {
          const res = await fetch(p.url);
          const pokeDetails = await res.json();

          return {
            name: p.name,
            image: pokeDetails.sprites.front_default,
            types: pokeDetails.types.map((t) => t.type.name),
          };
        } catch (err) {
          console.warn(`No se pudo obtener detalles de ${p.name}:`, err);
          return null;
        }
      })
    );

    return detailedPokemon.filter((p) => p !== null && p.image); // filtra Pokémon incompletos
  } catch (error) {
    console.error("Error general al obtener la lista de Pokémon:", error);
    return [];
  }
};
