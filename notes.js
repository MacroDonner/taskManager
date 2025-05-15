const fs = require('fs');
const file = 'data.json';

function loadTasks() {
	if (!fs.existsSync(file)) return [];
	return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

function saveTasks(tasks) {
	fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

function getTasks() {
	return loadTasks();
}

function addTask(title) {
	const tasks = loadTasks();
	const task = { id: Date.now(), title, done: false };
	tasks.push(task);
	saveTasks(tasks);
	return task;
}

function completeTask(id) {
	const tasks = loadTasks();
	const task = tasks.find(t => t.id == id);
	if (task) task.done = true;
	saveTasks(tasks);
	return task;
}

function deleteTask(id) {
	let tasks = loadTasks();
	tasks = tasks.filter(t => t.id != id);
	saveTasks(tasks);
}

module.exports = {
	getTasks,
	addTask,
	completeTask,
	deleteTask
};

