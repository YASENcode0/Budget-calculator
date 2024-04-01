import React from "react";
import Delete from '../assets/trash.png'

export default function Note({ coinMark, note, setIdDelete, setPopDelete }) {
  return (
    <div className="Note">
      <div>
        <img src={note.img} alt="icon" />
      </div>
      <div className="NoteDiv2">
        <strong>{note.title}</strong>
        <div className={`${note.type ? "green" : "red"}`}>
          {coinMark}
          {note.amount ? note.amount : 0}
        </div>
        <div className="date">{note.date?.substring(0, 24)}</div>
      </div>
      <button
        onClick={() => {
          setIdDelete(note);
          setPopDelete(true);
        }}
      >
        <img
          src={Delete}
          alt="delete"
        />
      </button>
    </div>
  );
}
