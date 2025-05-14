const { addNote, listNotes, deleteNotes } = require('./notes');

const command = process.argv[2];
const input = process.argv[3];

if (command === 'add') {
	addNote(input);
} else if (command === 'list') {
	listNotes();
} else if (command === 'delete') {
	deleteNotes(parseInt(input));
} else {
	console.log('Unknown command, Use add, list or delete.');
}
