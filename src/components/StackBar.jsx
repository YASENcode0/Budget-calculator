import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";

export default function StackBar() {
  const { addNewNote, changeCount, pop, setPop } = useContext(NotesContext);
  const [newNote, setNewNote] = useState({
    id: "",
    type: false,
    title: "",
    amount: null,
    date: "",
    img: "",
  });
  return (
    <>
      <button
        className="Stack"
        onClick={() => {
          setPop(true);
        }}
      >
        +
      </button>
    </>
  );
}
