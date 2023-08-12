import { useContext, useEffect } from "react";

import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  // Load and replace favorites from local storage when the component mounts
  useEffect(() => {
    // Store favorites in local storage whenever they change
    localStorage.setItem("favorites", JSON.stringify(favoriteCtx.favorites));
  }, [favoriteCtx.favorites]); // Only run the effect when favoriteCtx.favorites changes
  // avoid infinite loop by using setItem instead of getItem and only running the effect when favoriteCtx.favorites changes via a dependency array within useEffect

  if (!favoriteCtx.totalFavorites) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <div>
        <h1>Favorites</h1>
        {content}
      </div>
    </section>
  );
};

export default FavoritesPage;
