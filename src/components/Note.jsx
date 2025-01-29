import React from "react";
import Delete from "../assets/trash.png";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

export default function Note({ coinMark, note, setIdDelete, setPopDelete, editNote }) {
  return (
    <div className="Note">
      <img src={note.img} alt="icon" />

      <div className="NoteDiv2">
        <span>{note.title}</span>
        <div className={`${note.type ? "green" : "red"}`}>
          {coinMark}
          {note.amount ? note.amount : 0}
        </div>
        <span className="date">{note.date?.substring(0, 24)}</span>
      </div>
      <div className="note-btns">
        <button
          className="note-btn-delete"
          onClick={() => {
            setIdDelete(note);
            setPopDelete(true);
          }}
        >
          <MdDelete />
        </button>
        <button onClick={()=>{editNote(note)}}>
          <FaPen />
        </button>
      </div>
    </div>
  );
}
