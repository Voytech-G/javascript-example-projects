function saveNote() {
  const textNote = document.querySelector(".note-area").value;
  const keyNote = Date.now().toString();
  localStorage.setItem(keyNote, textNote);

  createNote(keyNote, textNote);
}

function deleteNote(keyNote) {
  localStorage.removeItem(keyNote);
  document.querySelector(`#id${keyNote}`).remove();
}

function createNote(keyNote, textNote) {
  const div = document.createElement("div");
  div.id = "id" + keyNote;
  div.className = "note";
  div.textContent = textNote;

  const button = document.createElement("button");
  button.textContent = "Delete";
  button.className = "btn-note-delete";
  button.onclick = () => {
    deleteNote(keyNote);
  };

  div.appendChild(button);
  document.querySelector(".notes").appendChild(div);
}

function init() {
  Object.keys(localStorage).forEach((keyNote) => {
    const textNote = localStorage.getItem(keyNote);
    createNote(keyNote, textNote);
  });
}

init();
