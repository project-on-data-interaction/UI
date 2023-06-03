/** @format */

async function connectAPI() {
	const response = await fetch(
		"http://localhost:3005/todos"
	);
	const data = await response.json();
	return data;
}
export default connectAPI;
