import React from "react";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
// !===============>> Icons
import { MdLogout, MdPeople } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpCenter } from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src="/noavatar.png"
          alt="avatar"
          height={50}
          width={50}
        />
        <div className="flex flex-col">
          <span className="font-medium">Alireza Talebizadeh</span>
          <span className="text-xs text-textSoft">Admin</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((item) => (
          <li key={item.title} className="">
            <span className="text-textSoft font-bold text-[13px] my-[10px] mx-0">
              {item.title}
            </span>
            {item.list.map((link) => (
              <MenuLink item={link} />
            ))}
          </li>
        ))}
      </ul>
      <button className="flex items-center gap-[10px] cursor-pointer rounded-[10px] p-5 my-[5px] mx-0 border-none text-text hover:bg-[#2e374a] w-full">
        <MdLogout />
        <span>Logout</span>
      </button>
    </div>
  );
}
