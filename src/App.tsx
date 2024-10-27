
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { PreviewPage } from "./components/previewPage";
import { FullPage } from "./components/fullPage";
import { useState } from "react";
import { MovieResponse } from "./components/types";

function App() {
	const [selectedMovie, setSelectedMovie] = useState<MovieResponse | null>(null);

	return (
		<Routes>
			<Route path="/" element={<PreviewPage setSelectedMovie={setSelectedMovie}/>}/>
			<Route path="/movie" element={<FullPage movie={selectedMovie} />}/>
		</Routes>
	);
}

export default App;
