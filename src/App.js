import { Home } from "./pages/Home";
import { Search } from "./pages/SearchPage";
import { Gallery } from "./pages/PersonalGallery";
import { Routes, Route } from "react-router-dom";
import { MenuAppBar } from "./components/NavMenu";
import { FooterBar } from "./components/Footer";
import { NoMatch } from "./pages/NoMatch";
function App() {
	return (
		<div className="App">
			<MenuAppBar />
			<main>
				<Routes>
					<Route path="/dashboard-images" element={<Home />} />
					<Route path="/dashboard-images/search" element={<Search />} />
					<Route path="/dashboard-images/gallery" element={<Gallery />} />
					<Route path="/dashboard-images/*" element={<NoMatch />} />
				</Routes>
			</main>
			<FooterBar />
		</div>
	);
}

export default App;
