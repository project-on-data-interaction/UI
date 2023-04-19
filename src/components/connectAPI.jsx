async function connectAPI(){
	const response =await fetch ("http://localhost:3001/todos"); 
	const data = await response.json();
	return data;
 }
  export default connectAPI;