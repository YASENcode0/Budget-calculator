import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { v4 as nextId } from "uuid";

export default function PopupControl() {
  const { pop, closePop, addNewNote, changeCount, newNote, setNewNote } =
    useContext(NotesContext);
  const [errs, setErrs] = useState({});

  useEffect(() => {
    setErrs({});
  }, [newNote]);

  function addNote() {
    if (newNote.title !== "" && newNote.amount !== null) {
      closePop();
      changeCount(newNote);
      addNewNote({ ...newNote, date: Date() , id:nextId()});
      clearAll();
    }
    if (!newNote.amount) {
      setErrs({ ...errs, amount: "amount required" });
    }
    if (!newNote.title) {
      setErrs({ ...errs, title: "name required" });
    }
  }

  function clearAll() {
    setNewNote({
      id: '',
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
        <div id="pop">
          <button
            id="cancelAdd"
            onClick={() => {
              closePop();
              clearAll();
            }}
          >
            cancel
          </button>
          <button id="addAdd" onClick={addNote}>
            add
          </button>
          <input
            autofocus
            // required
            className={errs?.title && "input-err"}
            placeholder={errs?.title ? errs?.title : "title"}
            value={newNote?.title || ""}
            type="text"
            onChange={(e) => {
              setNewNote({ ...newNote, title: e.target.value });
            }}
          />

          <input
            // required
            className={errs?.amount && "input-err"}
            placeholder={errs?.amount ? errs?.amount : "amount"}
            value={newNote?.amount || ""}
            type="number"
            onChange={(e) => {
              setNewNote({ ...newNote, amount: e.target.value });
            }}
          />

          <h2>type</h2>
          <div>
            <div id="selectMeth">
              <button
                onClick={() => {
                  setNewNote({ ...newNote, type: true });
                }}
                className={`${newNote.type ? "select" : ""}`}
              >
                +
              </button>
              <button
                onClick={() => {
                  setNewNote({ ...newNote, type: false });
                }}
                className={`${newNote.type ? "" : "select"}`}
              >
                -
              </button>
            </div>
          </div>
          <label>type :</label>

          <select
            onChange={(e) => {
              setNewNote({ ...newNote, img: e.target.value });
            }}
            value={newNote.img}
            id="type"
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
        </div>
      </div>
    );
  }
}
