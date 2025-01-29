import React, { useContext, useState } from "react";
import Note from "./Note";
import { NotesContext } from "../contexts/NotesContext";
import PopupDelete from "./PopupDelete";

export default function Main() {
  const [idDelete, setIdDelete] = useState("");
  const {
    NavBtn,
    notes,
    setNotes,
    count,
    setCount,
    coinMark,
    deleteNote,
    popDelete,
    setPopDelete,
    newNote,
    setNewNote,
    closePop,
  } = useContext(NotesContext);

  function editNote(data) {
    setNewNote(data);
    closePop();
  }

  return (
    <div className="Main">
      {notes
        ? notes.map((note) => {
            if (NavBtn === 1) {
              return (
                <Note
                  popDelete={popDelete}
                  setPopDelete={setPopDelete}
                  coinMark={coinMark}
                  note={note}
                  key={note.id}
                  deleteNote={deleteNote}
                  setIdDelete={setIdDelete}
                  editNote={editNote}
                />
              );
            } else if (NavBtn === 2) {
              if (note.type) {
                return (
                  <Note
                    popDelete={popDelete}
                    setPopDelete={setPopDelete}
                    coinMark={coinMark}
                    note={note}
                    key={note.id}
                    deleteNote={deleteNote}
                    setIdDelete={setIdDelete}
                    editNote={editNote}
                  />
                );
              }
            } else {
              if (!note.type) {
                return (
                  <Note
                    popDelete={popDelete}
                    setPopDelete={setPopDelete}
                    coinMark={coinMark}
                    note={note}
                    key={note.id}
                    deleteNote={deleteNote}
                    setIdDelete={setIdDelete}
                    editNote={editNote}
                  />
                );
              }
            }
          })
        : null}
      <PopupDelete
        popDelete={popDelete}
        setPopDelete={setPopDelete}
        deleteNote={deleteNote}
        note={idDelete}
      />
    </div>
  );
}
