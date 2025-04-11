import { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  
  
  
  const addFavorite = (pokemon) => {
    if (!favorites.find(p => p.name.toLowerCase() === pokemon.name.toLowerCase()))
    {
      setFavorites([...favorites, pokemon]);
    }
    
  };

  const removeFavorite = (name) => {
    setFavorites(favorites.filter(p => p.name !== name));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
