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
	},[]);
	
	return (
		
		<div> 
			<nav
		className="navbar navbar-dark bg-dark justify-content-center">
		<a
			className="navbar-brand"
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
				className="form-control"
				placeholder="Enter To-do-items"/>
	
			<input
				type="submit"
				value="   Add   "
				className="btn btn-sm btn-primary mx-2"/>
		</form>
		
		<ul className="list-group my-5">
		{todos.map((todo) => (
				<li key={todo.id}
				className="list-group-item d-flex justify-content-between">
				<input
					className="form-check-input me-1"
					type="checkbox"
					value=""
					id="firstCheckbox" />
			 
				<label
					className="form-check-label"
					>{todo.activity}</label>
				<a
					href="#"
					className="btn btn-dark btn-sm mx-2">
					Delete
				</a>
			</li>
      ))}
		</ul>
	</div>
		</div>
	)
}

export default Listgroup
 


 
