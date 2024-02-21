"use client";
import { usePathname } from "next/navigation";
import React from "react";
// ! Icons
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="flex items-center justify-between p-5 rounded-[10px] bg-bgSoft">
      <h4 className="text-textSoft font-bold capitalize">
        {pathName.split("/").pop()}
      </h4>
      <div className="flex  items-center gap-5">
        <div
          className="flex items-center gap-[10px]
         bg-[#2e374a] p-[10px] rounded-[10px]"
        >
          <MdSearch size={20} className="cursor-pointer"/>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent border-none text-text"
          />
        </div>
        <div className="flex gap-5 ">
          <MdOutlineChat size={20} className="cursor-pointer"/>
          <MdNotifications size={20} className="cursor-pointer"/>
          <MdPublic size={20} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}
