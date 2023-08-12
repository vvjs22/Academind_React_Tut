import { useContext } from "react";
import Card1 from "../ui/Card1";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorite-context";

const MeetupItem = (props) => {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card1>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.description}>
          <h3> {props.title} </h3>
          <address> {props.address} </address>
          <p> {props.description} </p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {favoriteCtx.itemIsFavorite(props.id)
              ? "Remove from Favorites"
              : "To Favorites"}
          </button>
        </div>
      </Card1>
    </li>
  );
};

export default MeetupItem;
