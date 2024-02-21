import React from "react";

export default function Pagination() {
  return (
    <div className="p-[10px] flex justify-between items-center">
      <button
        className={`p-[5px_10px] cursor-pointer rounded-[5px] bg-white button
       text-black `}
      >
        Previus
      </button>
      <button
        className="p-[5px_10px] cursor-pointer rounded-[5px] bg-white button
       text-black "
        disabled
      >
        Next
      </button>
    </div>
  );
}
