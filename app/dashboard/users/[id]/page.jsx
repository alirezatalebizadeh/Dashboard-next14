import React from "react";
import Image from "next/image";

export default function SingleUserPage() {
  return (
    <div className="grid grid-cols-4 gap-[50px] mt-5">
      <div className="col-span-1 rounded-[50px] bg-bgSoft p-5 h-max">
        <div className="w-full h-[250px] relative rounded-[10px] overflow-hidden mb-5">
          <Image alt="" fill src="/noavatar.png" className="object-cover" />
        </div>
        <span className="text-textSoft font-bold">Alireza Amiri</span>
      </div>
      <div className="col-span-3 bg-bgSoft p-5 rounded-[10px]">
        <form action="" className="flex flex-col">
          <label className="text-xs" htmlFor="userName">
            Username
          </label>
          <input
            className="p-5 border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="text"
            name="userName"
            placeholder="usename"
          />
          <label className="text-xs" htmlFor="Email">
            Email
          </label>
          <input
            className="p-5 border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="text"
            name="Email"
            placeholder="Yourname@gmail.com"
          />
          <label className="text-xs" htmlFor="Password">
            Password
          </label>
          <input
            className="p-5 border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="text"
            name="Password"
            placeholder="Password"
          />
          <label className="text-xs" htmlFor="Phone">
            Phone
          </label>
          <input
            className="p-5 border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="text"
            name="Phone"
            placeholder="Your Phone number"
          />
          <label className="text-xs" htmlFor="Address">
            Address
          </label>
          <input
            className="p-5 border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="text"
            name="Address"
            placeholder="Iran"
          />
          <label className="text-xs" htmlFor="Admin">
            Is Admin?
          </label>
          <select
            className="p-5 border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            name="Admin"
            id="Admin"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label className="text-xs" htmlFor="Address">
            Is Active ?
          </label>
          <select
            className="p-5 border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            name="Active"
            id="Active"
          >
            <option value={true}>Yes</option>
            <option value={false} selected>
              No
            </option>
          </select>
          <button
            className=" p-[20px] bg-teal-700 transition-colors hover:bg-teal-800
           cursor-pointer text-text border-none rounded-[5px] mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
