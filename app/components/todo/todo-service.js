import Todo from "../../models/todos.js"

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/chace/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}

let todoList = []

export default class TodoService {


	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				console.log('todo data =', res)
				this.todoList = res.data.data
				draw(this.todoList)
			})
			.catch(logError)
	}

	addTodo(todo, draw) {
		// WHAT IS THIS FOR???l
		todoApi.post('', todo)
			.then(res => { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				this.todoList.push(todo);
				draw(this.todoList)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, draw) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		const index = this.todoList.findIndex(item => item._id == todoId);
		let todo = this.todoList[index] ///MODIFY THIS LINE
		todo.completed = !todo.completed;
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		todoApi.put(todoId, todo)
			.then(res => {
				draw(this.todoList)
			})
			.catch(logError)
	}

	removeTodo(todoId, draw) {
		const index = this.todoList.findIndex(item => item._id == todoId);
		// Umm this one is on you to write.... The method is a DELETE
		todoApi.delete(todoId)
			.then(res => {
				this.todoList.splice(index, 1);
				draw(this.todoList)
			})
	}

}
