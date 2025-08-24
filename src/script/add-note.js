const form = document.querySelector('form');
const titleInput = form.elements.title;
const bodyInput = form.elements.body;
const output = document.getElementById('out');

import notesData from "./data/local/notes.js";

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newNote = {
    id: `notes-${Math.random().toString(36).substr(2, 9)}`,
    title: titleInput.value, 
    body: bodyInput.value,
    createdAt: new Date().toISOString(),
    archived: false,
  };
  notesData.push(newNote);
  console.log('New note added:', notesData);
  const noteListElement = document.querySelector('note-list');
  noteListElement.setAttribute('notes-data', JSON.stringify(notesData));
  titleInput.value = '';
  bodyInput.value = '';
});