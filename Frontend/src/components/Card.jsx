import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NoteDataContext } from "../context/NoteContext";

const Card = ({ title, description, id }) => {
  const { fetchNotes } = useContext(NoteDataContext);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  function handleDeleteNote(noteId) {
    // axios
    //   .delete("https://notes-creater-cbbq.onrender.com/api/notes/" + noteId)
    //   .then(() => {
    //     fetchNotes();
    //   });

    axios.delete("http://localhost:3000/api/notes/" + noteId).then(() => {
      fetchNotes();
    });
  }

  function handleUpdateNote(noteId) {
    const newDescription = prompt("Enter new description");

    // axios
    //   .patch("https://notes-creater-cbbq.onrender.com/api/notes/" + noteId, {
    //     description: newDescription,
    //   })

    axios
      .patch("http://localhost:3000/api/notes/" + noteId, {
        description: newDescription,
      })
      .then((res) => {
        console.log(res.data);

        fetchNotes();
      });
  }

  function getTextColor(bgColor) {
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);

    // Perceived brightness formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 150 ? "#000000" : "#ffffff";
  }

  function generateColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  const colorManipulator = () => {
    const color = generateColor();
    setBgColor(color);
    setTextColor(getTextColor(color));
  };

  useEffect(() => {
    colorManipulator();
  }, []);
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="w-70 rounded p-3 transition-all duration-500"
    >
      <div className="px-4 pt-8">
        <p className="text-sm opacity-70">12/12/2001</p>
        <div>
          <h2 className="text-xl font-semibold line-clamp-1">{title}</h2>
        </div>
      </div>
      <hr className="my-2 opacity-40"/>
      <div className="p-3 flex flex-col gap-3">
        <div>
          <p className="text-md -tracking-tighter leading-4.5 line-clamp-6 opacity-95">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2 opacity-70">
          <span>10:30 PM</span>
          <span>Monday</span>
        </div>
      </div>

       <div className="flex justify-between mt-2">
        <button
          onClick={() => handleDeleteNote(id)}
          className="px-5 py-1 rounded bg-black/30 hover:bg-black/50 active:scale-95 transition font-medium cursor-pointer"
        >
          Delete
        </button>

        <button
          onClick={() => handleUpdateNote(id)}
          className="px-5 py-1 rounded bg-black/20 hover:bg-black/40 active:scale-95 transition font-medium cursor-pointer"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Card;
