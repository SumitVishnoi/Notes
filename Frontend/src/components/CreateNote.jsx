import React, { useContext } from "react";
import axios from "axios";
import { NoteDataContext } from "../context/NoteContext";
import { IoMdClose } from "react-icons/io";

const CreateNote = ({display, setDisplay}) => {
  const { fetchNotes } = useContext(NoteDataContext);

  function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;

    // axios
    //   .post("https://notes-creater-cbbq.onrender.com/api/notes", {
    //     title: title.value,
    //     description: description.value,
    //   })

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then(() => {
        setDisplay(prev=>!prev)
        fetchNotes();
      });
  }

  return (
    <div className={`flex bg-[#3e3e3e] h-screen rounded m-2 relative`}>
      <IoMdClose onClick={()=> setDisplay(prev=>!prev)} className="text-white w-10 h-8 hover:bg-zinc-600 absolute right-0 cursor-pointer"/>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 p-10 w-full "
      >
        <input
          required
          name="title"
          type="text"
          placeholder="title here..."
          className="border border-black p-2 rounded w-full h-[8vh] bg-[#EAEAEA]"
        />
        <textarea
          required
          name="description"
          type="text"
          placeholder="description here..."
          className="border border-black p-2 rounded min-h-[10vh] max-h-[60vh] h-[50vh] bg-[#EAEAEA]"
        />
        <button className="bg-[#AD4B26] text-white font-medium px-6 py-3 rounded-full cursor-pointer active:scale-95 border-none">
          create
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
