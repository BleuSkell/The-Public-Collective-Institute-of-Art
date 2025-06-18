import { getArtworkImageUrl } from "../artApi";
import { useArtlist } from "../contexts/ArtlistContext";
import { useFavorites } from "../contexts/FavoritesContext";
import "../css/ArtList.css";

function ArtList() {
    const { artworks, loading } = useArtlist();
    const { addToFavorites } = useFavorites();

    if (loading) return <div>Loading artworks...</div>;

    return (
        <div>
            <main>
                <h1 className="artlist-title">The collection</h1>

                <h2 className="artlist-desc">Browse through all these artworks, and add them to your favorites to save them.</h2>

                <ul className="art-list">
                    {artworks.map(art => (
                        <li key={art.id} className="art">
                            {art.image_id && (
                                <div>
                                    <img
                                        src={getArtworkImageUrl(art.image_id)}
                                        alt={art.title}
                                    />
                                </div>
                            )}
                            <div className="art-details">
                                <p className="art-title"><strong>{art.title}</strong> – {art.artist_title}</p>

                                <button onClick={() => addToFavorites(art)} className="favorite-button">
                                    Add to favorites
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default ArtList;