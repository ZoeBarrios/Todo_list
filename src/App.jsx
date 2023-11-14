import './App.css';

import {useState, useEffect} from 'react';

export const App = () => {
	//recupero las tareas del localStorage, si no existen creo un array vacio
	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ?? []);
	const [newTask, setNewTask] = useState('');

	// Recuperar tareas del localStorage al cargar la página
	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem('tasks'));
		if (storedTasks) {
			setTasks(storedTasks);
		}
	}, []);

	// Guardar tareas en el localStorage
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const handleAddTask = (event) => {
		event.preventDefault();
		if (newTask.trim() !== '') {
			// Agregar nueva tarea al estado tasks
			setTasks([...tasks, newTask]);
			setNewTask('');
		}
	};

	//eliminar tarea
	const handleDeleteTask = (index) => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	return (
		<div className="container">
			<form
				className="column"
				onSubmit={handleAddTask}>
				<h1>Todo List</h1>
				<input
					type="text"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button type="submit">Add Task</button>
				<ul>
					{tasks.map((task, index) => (
						<li key={index}>
							{task}
							<button onClick={() => handleDeleteTask(index)}>Delete</button>
						</li>
					))}
				</ul>
			</form>
		</div>
	);
};
