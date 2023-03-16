import React, { useContext, useState } from "react";
import NoteContex from "../Context/NoteContex";

function AddNote() {
  const { addNote,getNote } = useContext(NoteContex);
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    getNote();
  };
  const handleOnChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Add Notes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleOnChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={handleOnChange}
            name="description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            onChange={handleOnChange}
            name="tag"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>
    </>
  );
}

export default AddNote;
