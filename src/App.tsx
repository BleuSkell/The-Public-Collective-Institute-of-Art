import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArtlistProvider } from "./contexts/ArtlistContext";
import NavBar from "./components/navbar";
import HomePage from "./pages/HomePage";
import ArtListPage from "./pages/ArtList";
import Favorites from "./pages/Favorites";
import News from "./pages/News";
import './App.css';

function App() {
  return (
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
    </Router>
  );
}

export default App;