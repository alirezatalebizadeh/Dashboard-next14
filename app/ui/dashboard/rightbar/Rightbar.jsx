import React from "react";
import Image from "next/image";
import {
  MdPlayCircleFilled,
  MdPlaylistAddCircle,
  MdReadMore,
} from "react-icons/md";

export default function Rightbar() {
  return (
    <div className="container">
      <div
        className="relative bg-gradient-to-t from-[#182237] 
      to-[#253352] p-5 rounded-[10px] mb-5"
      >
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 ">
          <Image
            alt=""
            fill
            src="/astronaut.png"
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-6 ">
          <span className="font-bold">🎈 Available Now</span>
          <h3 className="font-medium text-xs text-textSoft">
            How to use the new version of admin dashboard ?
          </h3>
          <span>Takes 4 minutes to learn</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
            magni. Laboriosam cum iure voluptate sed.
          </p>
          <button
            className="p-[10px] flex items-center gap-[10px]
           bg-[#5d57c9] text-white rounded-[5px] 
           cursor-pointer w-max"
          >
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div
        className="relative bg-gradient-to-t from-[#182237] 
      to-[#253352] p-5 rounded-[10px] mb-5"
      >
        <div className="flex flex-col gap-6 ">
          <span className="font-bold">🎇 Comming Soon</span>
          <h3 className="font-medium text-xs text-textSoft">
            How to use the new version of admin dashboard ?
          </h3>
          <span>Takes 4 minutes to learn</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
            magni. Laboriosam cum iure voluptate sed.
          </p>
          <button
            className="p-[10px] flex items-center gap-[10px]
           bg-[#5d57c9] text-white  rounded-[5px] 
           cursor-pointer w-max"
          >
            <MdReadMore />
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
