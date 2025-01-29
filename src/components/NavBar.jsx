import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiWalletLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { MdMoneyOff } from "react-icons/md";

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
          name="closer"
          className="mun-btn"
          onClick={() => {
            setPopMnu(!popMnu);
          }}
        >
          {popMnu ? <IoIosArrowForward /> : <IoMdSettings name="closer" />}
        </button>
      </div>
      <div className="NavBtn">
        <button
          className={`${NavBtn === 1 ? "choose" : ""}`}
          onClick={() => {
            setNavBtn(1);
          }}
        >
          <RiWalletLine />
          All
        </button>
        <button
          className={`${NavBtn === 2 ? "choose" : ""}`}
          onClick={() => {
            setNavBtn(2);
          }}
        >
          <MdAttachMoney />
          income
        </button>
        <button
          className={`${NavBtn === 3 ? "choose" : ""}`}
          onClick={() => {
            setNavBtn(3);
          }}
        >
          <MdMoneyOff />
          expenses
        </button>
      </div>
    </div>
  );
}
