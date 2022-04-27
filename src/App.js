import { Home } from "./pages/Home";
import { Search } from "./pages/SearchPage";
import { Gallery } from "./pages/PersonalGallery";
import { Routes, Route } from "react-router-dom";
import { MenuAppBar } from "./components/searchBar";
function App() {
	return (
		<div className="App">
			<main>
				<MenuAppBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/gallery" element={<Gallery />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
