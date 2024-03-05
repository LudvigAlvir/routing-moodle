import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./layout/Layout";
import { Specific } from "./pages/Specific";
function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/test"
						element={<h1>This is our test page</h1>}
					/>
					<Route
						path="/test/create"
						element={<h1>This is our hidden page</h1>}
					/>
					<Route
						path="/test/:id"
						element={<Specific />}
					/>

					<Route
						path="*"
						element={<h1>404 missing</h1>}
					/>
				</Routes>
			</Layout>
		</>
	);
}

export default App;
