import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import HomePage from "./pages/HomePage";
import ArtListPage from "./pages/ArtList";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artlist" element={<ArtListPage />} />
      </Routes>
    </Router>
  );
}

export default App;