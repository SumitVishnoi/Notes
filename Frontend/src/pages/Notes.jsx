import React, { useContext, useEffect, useState } from "react";
import CreateNote from "../components/CreateNote";
import { MdUpload } from "react-icons/md";
import Card from "../components/Card";
import { NoteDataContext } from "../context/NoteContext";

const Notes = () => {
  const {notes} = useContext(NoteDataContext)

  const [displayForm, setDisplayForm] = useState(false)

  
  return (
    <div className="bg-[#EAEAEA] min-h-screen px-5">
      <h2 className="font-medium text-2xl">Create New</h2>
      {displayForm == false && <div onClick={()=> setDisplayForm(prev=>!prev)} className="border-2 border-dashed border-zinc-600 w-50 h-50 m-5 flex flex-col justify-center items-center cursor-pointer active:bg-zinc-300">
        <p>
          <MdUpload className="w-10 h-10" />
        </p>
        <p>Create</p>
      </div>}

      {displayForm && <CreateNote display={displayForm} setDisplay={setDisplayForm}/>}
      
      {displayForm == false && <div>
        <h2 className="font-medium text-xl">My Notes</h2>
      <div className="flex flex-wrap gap-5 p-5">
        {notes.map((note, idx) => (
          <div key={idx}>
            <Card title={note.title} description={note.description} id={note._id}/>
          </div>
        ))}
      </div>
      </div>}
    </div>
  );
};

export default Notes;
