import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

 

const Listgroup = () => {
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
	
	<div className="container mt-5">
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
 


 
