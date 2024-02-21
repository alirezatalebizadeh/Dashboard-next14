import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search({ placeHolder }) {
  return (
    <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-[10px]">
      <MdSearch />
      <input
        type="text"
        className="outline-none bg-transparent border-none text-text"
        placeholder={placeHolder}
      />
    </div>
  );
}
