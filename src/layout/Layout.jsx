import { Link } from "react-router-dom";
export function Layout({ children }) {
	return (
		<>
			<header>
				<nav>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/test">Test</Link>
					</li>
					<li>
						<Link to="/test/1">Test 1</Link>
					</li>
					<li>
						<Link to="/test/2">Test 2</Link>
					</li>
					<li>
						<Link to="/missing">Missing</Link>
					</li>
				</nav>
			</header>
			{children}
			<footer>This is our footer</footer>
		</>
	);
}
