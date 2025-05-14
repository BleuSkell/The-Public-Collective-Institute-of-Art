import { useState, useEffect } from 'react'
import { fetchArtworks } from "./artApi";
import './App.css'

function App() {
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
    <>
      <div>
        <h1>Artworks</h1>
        <ul>
          {artworks.map(art => (
            <li key={art.id}>
              <strong>{art.title}</strong> – {art.artist_title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
