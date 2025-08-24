import notesData from "../data/local/notes.js";

document.addEventListener('DOMContentLoaded', function () {
    const noteListElement = document.querySelector('note-list');
    noteListElement.setAttribute('notes-data', JSON.stringify(notesData));
});