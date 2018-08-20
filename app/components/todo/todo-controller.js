import TodoService from "./todo-service.js";



var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	//DONT FORGET TO LOOP
	let count = todos.filter(todo => !todo.completed).length
	console.log(todos)
	var template = ''
	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i];
		if (todo.completed){
			template += `<s>`
		}
		template += `
		<li>
		<input type="checkbox" ${todo.completed ? 'checked':''} onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')">
		${todo.description}
		</li>
		`
		if(todo.completed){
			template += `</s>`
		}
		template +=`<button class="btn btn-danger btn-sm" onclick="app.controllers.todoController.removeTodo('${todo._id}')">x</button>`
		
	}
	document.getElementById('todo').innerHTML = template
	document.getElementById('todo-count').innerHTML = `todos left: ${count}`
}

export default class TodoController {
	constructor() {
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
		todoService.getTodos(draw)
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		console.log("form event", e)
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target.todo.value
		var todo = {
			user: "Chace",
			description: form,
			completed: false
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, draw)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, draw)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
