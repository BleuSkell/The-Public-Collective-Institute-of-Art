import { useFavorites } from "../contexts/FavoritesContext";
import { getArtworkImageUrl } from "../artApi";
import "../css/Favorites.css";

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return <h2>No favorites yet!</h2>;
  }

  return (
    <div>
      <h1 className="favorites-title">Your Favorites</h1>

      <ul className="favorites-list">
        {favorites.map((art) => (
          <li key={art.id} className="favorite-art">
            {art.image_id && (
              <div>
                <img
                  src={getArtworkImageUrl(art.image_id)}
                  alt={art.title}
                />
              </div>
            )}
            <div className="favorite-details">
              <p><strong>{art.title}</strong> – {art.artist_title}</p>

              <button onClick={() => removeFromFavorites(art.id)} className="favoriteButton">
                Remove from favorites
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
