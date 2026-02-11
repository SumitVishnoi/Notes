import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const NoteDataContext = createContext()

const NoteContext = ({children}) => {
    const [notes, setNotes] = useState([])

      function fetchNotes() {
        // axios
        //   .get("https://notes-creater-cbbq.onrender.com/api/notes")
        //   .then((res) => {
        //     setNotes(res.data.notes);
        //   });
    
        axios.get("http://localhost:3000/api/notes").then((res) => {
          setNotes(res.data.notes);
        });

      }
    
    const value = {
        notes,
        setNotes,
        fetchNotes
    }

    useEffect(() => {
        fetchNotes();
      }, []);

  return (
    <div>
        <NoteDataContext.Provider value={value}>
            {children}
        </NoteDataContext.Provider>
    </div>
  )
}

export default NoteContext