import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArtlistProvider } from "./contexts/ArtlistContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArtListPage from "./pages/ArtList";
import Favorites from "./pages/Favorites";
import News from "./pages/News";
import './App.css';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route 
            path="/artlist" 
            element={
              <ArtlistProvider>
                <ArtListPage />
              </ArtlistProvider>
            } 
          />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/news" element={<News />} />
        </Routes>

        <Footer />
      </Router>
    </FavoritesProvider>
  );
}

export default App;