import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

export default function PopMnu() {
  const { popMnu, setPopMnu, coinMark, setCoinMark } = useContext(NotesContext);

  if (popMnu) {
    return (
      <div className="popMnu">
        <div>
          <div
            onClick={() => {
              setPopMnu(false);
            }}
          >
            <img alt="x" />
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

            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            
          </div>
          <div>0</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
