import { useFavorites } from "../contexts/FavoritesContext";
import { getArtworkImageUrl } from "../artApi";

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return <h2>No favorites yet!</h2>;
  }

  return (
    <div>
      <h1>Your Favorites</h1>
      <ul>
        {favorites.map((art) => (
          <li key={art.id}>
            <strong>{art.id} - {art.title}</strong> – {art.artist_title}
            {art.image_id && (
              <div>
                <img
                  src={getArtworkImageUrl(art.image_id)}
                  alt={art.title}
                />
              </div>
            )}
            <button onClick={() => removeFromFavorites(art.id)} className="favoriteButton">
              Remove from favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
