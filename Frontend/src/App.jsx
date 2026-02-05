import axios from "axios";
import { useEffect, useState } from "react";

function App() {
const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios.get("https://notes-t4qf.onrender.com/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;


    axios
      .post("https://notes-t4qf.onrender.com/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then(() => {

        fetchNotes();
      });
  }

  function handleDeleteNote(noteId) {
    axios.delete("https://notes-t4qf.onrender.com/api/notes/" + noteId).then(() => {

      fetchNotes()
    });
  }

  function handleUpdateNote(noteId) {
    const newDescription = prompt("Enter new description")

    axios.patch("https://notes-t4qf.onrender.com/api/notes/"+noteId, {
      description:newDescription
    })
    .then((res)=> {
      console.log(res.data)

      fetchNotes()
    })

  }
  return (
    <div className="bg-[#EAEAEA] min-h-screen">
      <div className="flex justify-center items-center bg-[#9a9a9a]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-10">
          <input
            name="title"
            type="text"
            placeholder="title here..."
            className="border border-black p-2 rounded w-90"
          />
          <textarea
            name="description"
            type="text"
            placeholder="description here..."
            className="border border-black p-2 rounded"
          />
          <button className="bg-zinc-600 text-white font-medium px-6 py-3 rounded-full cursor-pointer active:scale-95 border-none">
            create
          </button>
        </form>
      </div>

      <div className="p-5 flex flex-wrap justify-center gap-5 ">
        {notes.map((note) => (
          
          <div key={note._id} className="w-70 bg-[#E9E582] rounded p-2">
            <div className="px-4 pt-8">
              <p className="text-sm text-gray-500">12/12/2001</p>
              <div>
                <h2 className="text-xl font-semibold line-clamp-1">{note.title}</h2>
              </div>
            </div>
            <hr />
            <div className="p-3 flex flex-col gap-3">
              <div>
                <p className="text-md -tracking-tighter leading-4.5 line-clamp-6 text-[#525252]">
                  {note.description}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm text-gray-500">10:30 PM</p>
                <p className="text-sm text-gray-500">Monday</p>
              </div>
            </div>

            <div className="flex justify-between">
              <button
              onClick={()=> handleDeleteNote(note._id)}
              className="bg-[#635f00] px-5 py-1 rounded text-white active:scale-95 font-medium cursor-pointer"
            >
              Delete
            </button>

            <button
              onClick={()=>handleUpdateNote(note._id)}
              className="bg-[#979304] px-5 py-1 rounded text-white active:scale-95 font-medium cursor-pointer"
            >
              Update
            </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default App
