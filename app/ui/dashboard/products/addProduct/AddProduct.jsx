import React from "react";

export default function AddProduct() {
  return (
    <div className="bg-bgSoft p-5 rounded-[10px] mt-5">
      <form action="" className="grid grid-cols-2 gap-[10px_40px]">
        <input
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          type="text"
          placeholder="Title"
          name="title"
          required
        />
        <select
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          name="Category"
          id="Category"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="cumputer">Cumputer</option>
        </select>
        <input
          type="number"
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          placeholder="Price"
          name="Price"
        />
        <input
          type="number"
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          placeholder="Stock"
          name="Stock"
        />
        <input
          type="text"
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          placeholder="Color"
          name="Color"
        />
        <input
          type="text"
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          placeholder="Size"
          name="Size"
        />
        <textarea
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] col-span-2"
          name=""
          id=""
          rows="16"
          placeholder="Description"
        ></textarea>
        <button
          className="col-span-2 p-[30px] bg-teal-700 transition-colors hover:bg-teal-800
          cursor-pointer text-text border-none rounded-[5px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
