let counter = 0;

function saveNote() {
  const noteArea = document.getElementById("noteContent");
  let noteContent = noteArea.value;
  const noteKey = Date.now().toString();
  localStorage.setItem(noteKey, noteContent);
  createNote(noteKey, noteContent);
  noteArea.value = "";
}

function deleteNote(noteKey) {
  document
    .querySelector(".notes-container")
    .removeChild(document.querySelector(`.note-wrapper[data-key="${noteKey}"`));
  localStorage.removeItem(noteKey);
}

function createNote(keyNote, noteContent) {
  const note = document.createElement("article");
  note.classList.add("note-wrapper");
  note.dataset.key = keyNote;
  note.innerHTML = `<span class="note-content">${noteContent}</span>`;
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("note-delete");
  deleteButton.textContent = "Delete";
  note.appendChild(deleteButton);
  deleteButton.onclick = () => {
    deleteNote(keyNote);
  };
  document.querySelector(".notes-container").appendChild(note);
}

document.getElementById("noteAdd").addEventListener("click", saveNote);

function init() {
  Object.keys(localStorage).forEach((keyNote) => {
    const noteContent = localStorage.getItem(keyNote);
    createNote(keyNote, noteContent);
  });
}
init();
