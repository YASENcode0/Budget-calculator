import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import StackBar from "./components/StackBar";
import { NotesContext } from "./contexts/NotesContext";
import PopupControl from "./components/PopupControl";
import { v4 as nextId } from "uuid";
import PopMnu from "./components/PopMnu";
import { RiUbuntuLine } from "react-icons/ri";

// change + add note bug

function App() {
  const [count, setCount] = useState(0);
  const [notes, setNotes] = useState([]);
  const [pop, setPop] = useState(false);
  const [coinMark, setCoinMark] = useState("$");
  const [NavBtn, setNavBtn] = useState(1);
  const [popDelete, setPopDelete] = useState(false);
  const [popMnu, setPopMnu] = useState(false);

  const [newNote, setNewNote] = useState({
    id: nextId(),
    type: true,
    title: "",
    amount: null,
    date: "",
    img: "https://cdn-icons-png.flaticon.com/512/3514/3514491.png",
  });

  useEffect(() => {
    const loadCount = JSON.parse(localStorage.getItem("count"));
    setCount(loadCount ? loadCount : 0);
    const allNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes(allNotes ? allNotes : []);
  }, []);

  function addNewNote(note) {
    console.log(newNote);
    console.log(note);
    
    if (newNote.id && note.id) {
      console.log(true);

      const noteIndex = notes.findIndex((i) => {
        if (i.id === note.id) {
          return i;
        }
      });
      console.log(noteIndex);
      if (noteIndex >= 0) {
        const allNotes = notes.map((not, i) => {
          if (i === noteIndex) return note;
          return not;
        });
        pushNote(allNotes);
      }
      return;
    } else {
      pushNote([...notes, note]);
    }
  }

  function pushNote(AllNote) {
    setNotes(AllNote);
    localStorage.setItem("notes", JSON.stringify(AllNote));
  }

  function deleteNote(note) {
    console.log(note.id);
    const newNotes = notes.filter((newNote) => {
      return newNote.id !== note.id;
    });
    setNotes(newNotes);
    changeCount({ ...note, type: !note.type });
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function closePop() {
    setPop(!pop);
  }

  function changeCount({ amount, type }) {
    if (type) {
      setCount(Number(count) + Number(amount));
      localStorage.setItem(
        "count",
        JSON.stringify(Number(count) + Number(amount))
      );
    } else {
      setCount(count - amount);
      localStorage.setItem("count", JSON.stringify(count - amount));
    }
  }

  return (
    <NotesContext.Provider
      value={{
        newNote,
        setNewNote,
        popMnu,
        setPopMnu,
        popDelete,
        setPopDelete,
        deleteNote,
        NavBtn,
        setNavBtn,
        coinMark,
        setCoinMark,
        closePop,
        changeCount,
        addNewNote,
        notes,
        setNotes,
        count,
        setCount,
        pop,
        setPop,
      }}
    >
      <div
        className={`App ${popMnu && "app-slide"}`}
        onClick={(e) => {
          if (e.clientY > 100) {
            setPopMnu(false);
          }
        }}
      >
        <PopupControl />
        <NavBar />
        <Main />
        <StackBar />
      </div>
      <PopMnu />
    </NotesContext.Provider>
  );
}

export default App;
