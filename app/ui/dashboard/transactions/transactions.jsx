import React from "react";
import Image from "next/image";
export default function Transactions() {
  return (
    <section className="bg-bgSoft p-5 rounded-[10px]">
      <h2 className="mb-5 font-extralight text-textSoft">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px] ">Name</td>
            <td className="p-[10px] ">Status</td>
            <td className="p-[10px] ">Data</td>
            <td className="p-[10px] ">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div className="flex gap-[10px] items-center">
              <Image
                className="object-cover rounded-[50%]"
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
              />
              Alireza Talebizadeh
            </div>
            <td className="p-[10px]">
              <span
                className={`rounded-[5px] p-[5px] text-[15px] text-white bg-[#f7cb7375] sm:bg-[#afd6ee75] md:bg-[#f7737375]`}
              >
                Pending
              </span>
            </td>
            <td className="p-[10px]">14.02.1402</td>
            <td className="p-[10px]">3000$</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
