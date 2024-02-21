import React from "react";
import Image from "next/image";

export default function SingleProductPage() {
  return (
    <div className="grid grid-cols-4 gap-[50px] mt-5">
      <div className="col-span-1 rounded-[50px] bg-bgSoft p-5 h-max">
        <div className="w-full h-[250px] relative rounded-[10px] overflow-hidden mb-5">
          <Image alt="" fill src="/noavatar.png" className="object-cover" />
        </div>
        <span className="text-textSoft font-bold">Product Name</span>
      </div>
      {/* !Form section */}
      <div className="col-span-3 bg-bgSoft p-5 rounded-[10px]">
        <form action="" className="flex flex-col">
          <label className="text-xs" htmlFor="Title">
            Title
          </label>
          <input
            className="p-5  border-[#2e374a] border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="text"
            name="Title"
            placeholder="Title"
          />
          <label className="text-xs" htmlFor="  Price">
            Price
          </label>
          <input
            className="p-5 border-[#2e374a] border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="number"
            name="text"
            placeholder=" Price"
          />
          <label className="text-xs" htmlFor="Stock">
            Stock
          </label>
          <input
            className="p-5  border-[#2e374a] border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="text"
            name="Stock"
            placeholder="Stock"
          />
          <label className="text-xs" htmlFor="Color">
            Color
          </label>
          <input
            className="p-5 border-[#2e374a] border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="text"
            name="Color"
            placeholder="Color"
          />
          <label className="text-xs" htmlFor="Size">
            Size
          </label>
          <input
            className="p-5 border-[#2e374a] border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            type="text"
            name="Size"
            placeholder="Size"
          />
          <label className="text-xs" htmlFor="Category">
            Category
          </label>
          <select
            class="p-5 border-[#2e374a] border-[2px] rounded-[5px] bg-bg text-text m-[10px_0px]"
            name="Category"
            id="Category"
          >
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="cumputer">Cumputer</option>
          </select>
          <label className="text-xs" htmlFor="desc">
            desc
          </label>
          <textarea
            class="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]   border-[2px] border-[#2e374a] col-span-2"
            name="desc"
            id=""
            rows="8"
            placeholder="Description"
          ></textarea>

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
