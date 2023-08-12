import { createContext, useState, useEffect } from "react";

// Create a context with default values for the initial state
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
  replaceFavorites: (newFavorites) => {},
});

// The context provider component
export function FavoritesContextProvider(props) {
  // Use localStorage to load initial favorites or an empty array if none exist
  const [userFavorites, setUserFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(userFavorites));
  }, [userFavorites]);

  // Handlers for managing favorites
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  function replaceFavoritesHandler(newFavorites) {
    return setUserFavorites(() => {
      return newFavorites;
    }); // No need to wrap in a function here
  }

  // Context value with the updated handlers and state
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
    replaceFavorites: replaceFavoritesHandler,
  };

  // Provide the context value to the children components
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
