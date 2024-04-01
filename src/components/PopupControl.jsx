import React, { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";

export default function PopupControl() {
  const { pop, closePop, addNewNote, changeCount } = useContext(NotesContext);
  const [newNote, setNewNote] = useState({
    id: "",
    type: true,
    title: "",
    amount: null,
    date: "",
    img: "https://cdn-icons-png.flaticon.com/512/3514/3514491.png",
  });

  function addNote() {
    if (newNote.title !== "" && newNote.amount !== null) {
      closePop();
      changeCount(newNote);
      addNewNote({ ...newNote, date: Date() });
      clearAll();
    }
  }

  function clearAll() {
    setNewNote({
      id: "",
      type: true,
      title: "",
      amount: null,
      date: "",
      img: "https://cdn-icons-png.flaticon.com/512/3514/3514491.png",
    });
  }

  if (pop) {
    return (
      <div id="popup">
        <form id="pop">
          <button
          id='cancelAdd'
            onClick={() => {
              closePop();
              clearAll();
            }}
          >
            cancel
          </button>
          <button id='addAdd' onClick={addNote}>add</button>
          <input
            autofocus
            required
            placeholder="title"
            value={newNote.title}
            type="text"
            onChange={(e) => {
              setNewNote({ ...newNote, title: e.target.value });
            }}
          />
          <input
            required
            placeholder="amount"
            value={newNote.amount}
            type="number"
            onChange={(e) => {
              setNewNote({ ...newNote, amount: e.target.value });
            }}
          />

          <h2>type</h2>
          <div>
            <label>+</label>
            <input
              value={true}
              name="0"
              type="radio"
              onChange={() => {
                setNewNote({ ...newNote, type: true });
              }}
            />
            <label>-</label>
            <input
              value={false}
              name="0"
              type="radio"
              onChange={() => {
                setNewNote({ ...newNote, type: false });
              }}
            />
          </div>
          <label for="cars">type :</label>

          <select
            onChange={(e) => {
              setNewNote({ ...newNote, img: e.target.value });
            }}
            value={newNote.img}
            name="cars"
            id="cars"
          >
            <option value="	https://cdn-icons-png.flaticon.com/512/3514/3514491.png">
              shopping
            </option>
            <option value="	https://cdn-icons-png.flaticon.com/512/753/753839.png">
              food
            </option>
            <option value="https://cdn-icons-png.flaticon.com/512/483/483497.png">
              fuel
            </option>
            <option value="	https://cdn-icons-png.flaticon.com/512/12559/12559881.png">
              bills
            </option>
          </select>
        </form>
      </div>
    );
  }
}
