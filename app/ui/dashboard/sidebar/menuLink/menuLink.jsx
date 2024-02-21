"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MenuLink({ item }) {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex p-4 items-center gap-[10px] my-[10px] mx-0 rounded-[10px] transition-colors hover:bg-bg-hover ${
        item.path === pathName ? "bg-bg-hover" : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
