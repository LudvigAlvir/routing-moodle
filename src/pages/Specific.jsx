import { useParams } from "react-router-dom";

export function Specific() {
	const { id } = useParams();

	return <h1> this is page {id}</h1>;
}
