import { fetchArtworks, getArtworkImageUrl } from "../artApi";
import { useEffect, useState } from "react";

function ArtList() {
    const [artworks, setArtworks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArtworks().then(data => {
            setArtworks(data.data);
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;

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
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArtList;