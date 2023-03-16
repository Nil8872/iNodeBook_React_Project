import React, { useState,useEffect } from "react";
import NoteContex from "./NoteContex";



function NoteState(props) {
  const baseUrl = "http://localhost:5000"
  const inittialNotes = []
    
  useEffect(()=>{
    getNote();
  },[])
  const [notes, setNotes] = useState(inittialNotes);

  const getNote = async()=>{
    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMDhhN2Q1MjQwMmM3Njg5M2Y0N2U2In0sImlhdCI6MTY3ODgxMDA4NX0.oVWPhDZptfReov35NMosi_Iz2LGWhOMKp99FLxg7nD8",
      }
    };

    const response = await fetch(`${baseUrl}/api/notes/getAllNotes`, option);
    const result =await response.json()
   setNotes(result);

  }
  
  // Add note function is here
  const addNote = async({ title, description, tag }) => {

    // using API End Point and store data in backend
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMDhhN2Q1MjQwMmM3Njg5M2Y0N2U2In0sImlhdCI6MTY3ODgxMDA4NX0.oVWPhDZptfReov35NMosi_Iz2LGWhOMKp99FLxg7nD8",
      },
      body: JSON.stringify({title, description, tag}),
    };

    const response = await fetch(`${baseUrl}/api/notes/addNote`, option);
    const result = await response.json()
    console.log(result);

    // client Side Add note

    const note = {
      title,
      description,
      tag,
    };

    setNotes(notes.concat(note));
  };

  // Delete Note fuction is here
  const deleteNote = async(id) => {

    // Delete note in Backend using api end point
    const option = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMDhhN2Q1MjQwMmM3Njg5M2Y0N2U2In0sImlhdCI6MTY3ODgxMDA4NX0.oVWPhDZptfReov35NMosi_Iz2LGWhOMKp99FLxg7nD8",
      }
    };

    const response = await fetch(`${baseUrl}/api/notes/deleteNote/${id}`, option);
    const result = await response.json()
    console.log(result);


    // Delete Note in Client side
    const afterDeleteNotes = notes.filter((note) => {
      return id !== note._id;
    });
    setNotes(afterDeleteNotes);
  };

  // Edit Note function is here

  const editNote = async ({ id, title, description, tag }) => {
    
    
    // using api editNote  in Backed.
    const option = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMDhhN2Q1MjQwMmM3Njg5M2Y0N2U2In0sImlhdCI6MTY3ODgxMDA4NX0.oVWPhDZptfReov35NMosi_Iz2LGWhOMKp99FLxg7nD8",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${baseUrl}/api/notes/updateNote/${id}`, option);
    const result = response.json()
    console.log(result);

    // client side edit note
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        console.log(notes);
        setNotes(notes);
      }
    }
  };
  return (
    <NoteContex.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
      {props.children}
    </NoteContex.Provider>
  );
}

export default NoteState;
