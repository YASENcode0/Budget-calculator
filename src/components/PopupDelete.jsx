import React from "react";

export default function PopupDelete({
  popDelete,
  setPopDelete,
  deleteNote,
  note,
}) {
  function popOF() {
    setPopDelete(false);
  }
  if (popDelete) {
    return (
      <div className="popDelete">
        <div className="popDeleteContent">
          <h2>Delete Note</h2>
          <div>
            <button onClick={popOF} className="cancel">
              cancel
            </button>
            <button
              onClick={() => {
                popOF();
                deleteNote(note);
              }}
              className="delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
