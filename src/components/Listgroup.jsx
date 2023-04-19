import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import connectAPI from "./connectAPI";
 

const Listgroup = () => {

	const [todos, setTodos] = useState([]);

	
	useEffect(() =>{
			fetch("http://localhost:3001/todos")
				.then(response => {
					if(response.ok){
						return response.json()
					}
				
				}).then(data =>{
					console.log(data)
					setTodos(data)
				})
	},setTodos);
	
	return (
		
		<div> 
			
			<nav
		className="navbar navbar-dark bg-dark justify-content-center">
		<a
			class="navbar-brand"
			//style="font-size: 32px"
			href="#"
			>To-do App </a>
	</nav>
	
	<div id="testing" className="container mt-5">
		<form
			action="/add/todo"
			method="post"
			className="d-flex">
			<input
				type="text"
				name="todo"
				class="form-control"
				placeholder="Enter To-do-items"/>
	
			<input
				type="submit"
				value="   Add   "
				className="btn btn-sm btn-primary mx-2"/>
		</form>
		{todos.forEach((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
		<ul className="list-group my-5">
		
			<li
				className="list-group-item d-flex justify-content-between">
				<input
					className="form-check-input me-1"
					type="checkbox"
					value=""
					id="firstCheckbox"/>
			 
				<label
					className="form-check-label"
					for="firstCheckbox"></label>
				<a
					href="#"
					className="btn btn-dark btn-sm mx-2">
					Delete
				</a>
			</li>
	
	 
		</ul>
	</div>
			
		</div>
	)
}

export default Listgroup
 


 
