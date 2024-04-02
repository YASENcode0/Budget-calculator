import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import StackBar from "./components/StackBar";
import { NotesContext } from "./contexts/NotesContext";
import PopupControl from "./components/PopupControl";
import { v4 as nextId } from "uuid";
import PopMnu from "./components/PopMnu";

function App() {
  const [count, setCount] = useState(0);
  const [notes, setNotes] = useState([]);
  const [pop, setPop] = useState(false);
  const [coinMark, setCoinMark] = useState("$");
  const [NavBtn, setNavBtn] = useState(1);
  const [popDelete, setPopDelete] = useState(false);
  const [popMnu, setPopMnu] = useState(false);

  useEffect(() => {
    const loadCount = JSON.parse(localStorage.getItem("count"));
    setCount(loadCount ? loadCount : 0);

    const allNotes = JSON.parse(localStorage.getItem("notes"));

    setNotes(allNotes ? allNotes : []);
  }, []);

  function addNewNote(note) {
    console.log(note, "note app");

    const allNotes = [...notes, { ...note, id: nextId() }];
    setNotes(allNotes);
    localStorage.setItem("notes", JSON.stringify(allNotes));

    console.log(note);
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
    setPop(false);
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
      <div className="App">
        <PopMnu />
        <PopupControl />
        <NavBar />
        <Main />
        <StackBar />
      </div>
    </NotesContext.Provider>
  );
}

export default App;
