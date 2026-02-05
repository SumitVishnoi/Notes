import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white p-2 flex items-center justify-between">
      <div className="p-2">
        <p className="text-3xl font-semibold">Notes<span className="text-sm ">Creater</span></p>
      </div>
      <button className="bg-zinc-600 text-white font-medium px-6 py-3 rounded-full cursor-pointer active:scale-95 border-none">create new</button>
    </div>
  );
};

export default Navbar;
