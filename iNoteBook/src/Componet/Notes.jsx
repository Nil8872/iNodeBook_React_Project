import React, { useContext } from "react";
import NoteItems from "./NoteItems";
import NoteContex from "../Context/NoteContex";

function Notes() {
    const { notes } = useContext(NoteContex);

  return (
    <div className="row">
    <h1 className="my-3">Shows Notes</h1>
      {notes.map((note) => {
        return <NoteItems key={note._id} note={note}/> 
      })}
    </div>
  );
}

export default Notes;
