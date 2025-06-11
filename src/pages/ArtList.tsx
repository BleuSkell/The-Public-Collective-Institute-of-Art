import { getArtworkImageUrl } from "../artApi";
import { useArtlist } from "../contexts/ArtlistContext";
import { useFavorites } from "../contexts/FavoritesContext";

function ArtList() {
    const { artworks, loading } = useArtlist();
    const { addToFavorites } = useFavorites();

    if (loading) return <div>Loading artworks...</div>;

    return (
        <div>
            <h1>Artworks</h1>
            <ul>
                {artworks.map(art => (
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
                        <button onClick={() => addToFavorites(art)} className="favoriteButton">
                            Add to favorites
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArtList;