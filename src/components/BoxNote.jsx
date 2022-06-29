import React from "react";
import {showFormattedDate} from "../utils/data";

const BoxNote = ({note, onDelete, option}) => {
  return (
    <div className="note">
      <button className="delete-button" onClick={()=>onDelete(note.id)}>
        <span>x</span>
      </button>
      <h3>{note.title}</h3>
      <h5>{showFormattedDate(note.createdAt)}</h5>
      <p>
        {note.body}
      </p>
      <button className={`arsip-button ${option==="catatan" ? "bg-secondary" : "bg-third"}`}>
        {option==="catatan" ? "Arsip" : "Batal Arsip"}
      </button>
    </div>
  );
};

export default BoxNote;
