const express = require('express');
const app = express();
const PORT = 3000;

const {
	getTasks,
	addTask,
	completeTask,
	deleteTask
} = require('./notes');

app.use(express.json());
app.use(express.static('public')); // отдаёт index.html

app.get('/tasks', (req, res) => {
	res.json(getTasks());
});

app.post('/tasks', (req, res) => {
	const { title } = req.body;
	const newTask = addTask(title);
	res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
	const task = completeTask(req.params.id);
	res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
	deleteTask(req.params.id);
	res.status(204).send();
});

app.listen(PORT, () => {
	console.log(`Сервер работает: http://localhost:${PORT}`);
});

