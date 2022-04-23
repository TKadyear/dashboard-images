import './App.css';
import SearchAppBar from './components/searchBar';
import { Home } from './pages/Home'
import { Search } from './pages/SearchPage'
import { Gallery } from './pages/PersonalGallery'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <SearchAppBar></SearchAppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
