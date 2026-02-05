import React from "react";

const Card = ({title, desc, btnClick}) => {
  return (
    <div className="w-70 bg-[#E9E582] rounded p-2">
      <div className="px-4 pt-8">
        <p className="text-sm text-gray-500">12/12/2001</p>
        <div>
          <h2 className="text-xl font-semibold line-clamp-1">{title}</h2>
        </div>
      </div>
      <hr />
      <div className="p-3 flex flex-col gap-3">
        <div>
          <p className="text-md -tracking-tighter leading-4.5 line-clamp-6 text-[#525252]">
            {desc}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-sm text-gray-500">10:30 PM</p>
          <p className="text-sm text-gray-500">Monday</p>
        </div>
      </div>
      <button onClick={btnClick} className="bg-[#635f00] px-5 py-1 rounded text-white active:scale-95 font-medium cursor-pointer">Delete</button>
    </div>
  );
};

export default Card;
