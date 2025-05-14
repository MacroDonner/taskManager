const fs = require('fs');

function loadNotes() {
	const data = fs.readFileSync('data.json', 'utf-8');
	return JSON.parse(data);
}
function saveNotes(notes) {
	fs.writeFileSync('data.json', JSON.stringify(notes, null, 2));
}

function addNote(text) {
	const notes = loadNotes();
	notes.push(text);
	saveNotes(notes);
	console.log('Note added: ', text);
}
function listNotes() {
	const notes = loadNotes();
	notes.forEach((note, index) => {
		console.log(`${index + 1}. ${note}`);
	});
}


function deleteNotes(index) {
	const notes = loadNotes();
	if (index < 1 || index > notes.length) {
		console.log('Invalid index');
		return;
	}
	const removed = notes.splice(index - 1, 1);
	saveNotes(notes);
	console.log('Note deleted', removed[0]);
}

module.exports = { addNote, listNotes, deleteNotes };
