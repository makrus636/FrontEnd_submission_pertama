import Utils from "../Utils";
import noteData from "../data/local/notes.js";

const home = () => {
  const main = document.querySelector("main");
  Utils.emptyElement(main);

  const noteList = document.createElement("note-list");
  noteList.column = 2;
  noteList.gutter = 16;

  if (noteData.length === 0) {
    Utils.hideElement(noteList);
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Tidak ada catatan";
    main.appendChild(emptyMessage);
  } else {
    Utils.showElement(noteList);
    noteData.forEach((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.note = note;
      noteList.appendChild(noteItem);
    });
  }

  main.appendChild(noteList);
  const form = document.createElement("form");
  form.method = "POST";
}