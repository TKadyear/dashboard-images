import { Home } from "./pages/Home";
import { Search } from "./pages/SearchPage";
import { Gallery } from "./pages/PersonalGallery";
import { Routes, Route } from "react-router-dom";
import { MenuAppBar } from "./components/NavMenu";
import { FooterBar } from "./components/Footer";
function App() {
	return (
		<div className="App">
			<MenuAppBar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/gallery" element={<Gallery />} />
				</Routes>
			</main>
			<FooterBar />
		</div>
	);
}

export default App;
