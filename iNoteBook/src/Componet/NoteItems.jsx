import React,{useContext} from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import DeleteIcon from '@mui/icons-material/Delete';
import NoteContex from "../Context/NoteContex"; 

function NoteItems(props) {
    const { deleteNote, editNote } = useContext(NoteContex);
  const { note } = props;

  const HandleEditNote = ()=>{
    const updatedNote = {
      id: note._id,
      title : "NileshSariya",
      description : "Updated Description",
      tag : "updated Tag"
    }
     editNote(updatedNote);
  }
  return (
    <>
      <div className="col-md-3 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <div className="iconBtn"> 
              <MdDelete className="icon deleteBtn" onClick={()=>deleteNote(note._id)}/>
              <FaEdit className="icon mx-3 editBtn" onClick={HandleEditNote} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteItems;
