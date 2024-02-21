import React from "react";
import Search from "@/app/ui/dashboard/search/Search";
import Pagination from "@/app/ui/pagination/Pagination";
import Link from "next/link";
import Image from "next/image";

export default function User() {
  return (
    <div className="bg-bgSoft p-5 rounded-[10px] mt-5">
      {/* ! Search bar */}
      <div className="flex items-center justify-between ">
        <Search placeHolder="Search for a user" />
        <Link href="/dashboard/users/add" className="">
          <button className="p-[10px] bg-[#5d57c9] text-text rounded-[5px] ">
            Add New
          </button>
        </Link>
      </div>
      {/* ! Table */}
      <table className="w-full ">
        <tHead className="">
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Email</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Role</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </tHead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image
                  alt=""
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className="p-[10px] rounded-full object-cover"
                />
                Alireza Taheri
              </div>
            </td>
            <td className="p-[10px]">Alireza@gmail.com</td>
            <td className="p-[10px]">13.01.1402</td>
            <td className="p-[10px]">Admin</td>
            <td className="p-[10px]">Active</td>
            <td className="p-[10px] flex items-center gap-[10px]">
              <Link href="/dashboard/users/test">
                <button
                  className="p-[5px_10px] rounded-[5px] text-text 
                 border-none cursor-pointer bg-green-700"
                >
                  View
                </button>
              </Link>
              <button
                className="p-[5px_10px] rounded-[5px] text-text bg-red-700
               border-none cursor-pointer"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* !Pagination */}
      <Pagination />
    </div>
  );
}
