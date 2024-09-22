const goTodo = document.querySelector('#goTodo');
const todoBox = document.querySelector('#todoBox');
const todoForm = document.querySelector('#todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todoList');
const TODOS_KEY = 'todo';
let todos = []
export default function mimiTodo(){
	goTodo.addEventListener('click',todoAcc);
	todoForm.addEventListener('submit',handleTodoSubmit);
	const savedTodos = localStorage.getItem(TODOS_KEY);
	if(savedTodos !== null){
		const parsedTodos = JSON.parse(savedTodos);
		// 전에 있던 리스트 복원
		todos = parsedTodos;
		parsedTodos.forEach(item => paintTodo(item))
	}
}
function todoAcc(){
	// console.log(5)
	todoBox.classList.toggle('active');
	if(document.querySelector('#weatherBox').classList.contains('active')){
		document.querySelector('#weatherBox').classList.remove('active');
	}
}
function paintTodo(myTodo){
	const li = document.createElement('li');
	li.id = myTodo.id;
	const span = document.createElement('span');
	span.innerText = myTodo.text;
	const btn = document.createElement('button');
	btn.innerText = 'x';
	btn.addEventListener('click',deleteTodo)
	li.appendChild(span);
	li.appendChild(btn);
	todoList.appendChild(li);
	// console.log(myTodo)
}
function handleTodoSubmit(e){
	e.preventDefault();
	const myTodo = todoInput.value;
	todoInput.value = "";
	const todoObj = {
		text: myTodo,
		id: Date.now(),
	}
	todos.push(todoObj);
	paintTodo(todoObj);
	saveTodo()
}
function saveTodo(){
	localStorage.setItem('todo', JSON.stringify(todos));
}
function deleteTodo(e){
	const li = e.target.parentNode;
	todos = todos.filter((todo) => todo.id !== Number(li.id))
	li.remove();
	saveTodo();
}