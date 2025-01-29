import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

export default function PopMnu() {
  const { popMnu, setPopMnu, coinMark, setCoinMark } = useContext(NotesContext);

  return (
    <div className={`popMnu ${popMnu && "mun-open"}`}>
      <div className="pop-mnu-div">
        <div
          onClick={() => {
            setPopMnu(false);
          }}
        >
        </div>
        <div>
          <label>change</label>
          <select
            value={coinMark}
            onChange={(e) => {
              setCoinMark(e.target.value);
            }}
          >
            <option value="$">$</option>
            <option value="E">E</option>
            <option value="Ils">ils</option>
          </select>
        </div>
        <div>
          <h3>Them</h3>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div>0</div>
      </div>
    </div>
  );
}
