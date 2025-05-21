import { useState, useEffect } from 'react'
import { fetchArtworks, getArtworkImageUrl } from "./artApi"; // make sure the path is correct
import NavBar from "./components/navbar";
import './App.css'

function App() {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtworks().then(data => {
      setArtworks(data.data); // watch out: `data` contains `data`, `pagination`, etc.
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <NavBar />

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
    </>
  )
}

export default App
