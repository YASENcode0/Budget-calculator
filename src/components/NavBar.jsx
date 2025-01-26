import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

export default function NavBar() {
  const {
    popMnu,
    setPopMnu,
    NavBtn,
    setNavBtn,
    notes,
    setNotes,
    count,
    setCount,
    coinMark,
    setCoinMark,
  } = useContext(NotesContext);

  return (
    <div className="Nav">
      <div className="NavDiv">
        <div className={`NavAmount ${count >= 0 ? "green" : "red"}`}>
          <select
            value={"$"}
            onChange={(e) => {
              setCoinMark(e.target.value);
            }}
          >
            <option value={"€"}></option>
            <option value={"$"}></option>
          </select>
          {coinMark}
          {count}
        </div>

        <button
          className="mun-btn"
          onClick={() => {
            setPopMnu(true);
          }}
        >
          <img src="" alt="mnu" />
        </button>
      </div>
      <div className="NavBtn">
        <button
          className={`${NavBtn === 1 ? "choose" : ""}`}
          onClick={() => {
            setNavBtn(1);
          }}
        >
          chose1
        </button>
        <button
          className={`${NavBtn === 2 ? "choose" : ""}`}
          onClick={() => {
            setNavBtn(2);
          }}
        >
          chose2
        </button>
        <button
          className={`${NavBtn === 3 ? "choose" : ""}`}
          onClick={() => {
            setNavBtn(3);
          }}
        >
          chose3
        </button>
      </div>
    </div>
  );
}
