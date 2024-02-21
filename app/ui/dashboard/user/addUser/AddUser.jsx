import React from "react";

//TODO Responsive this section

export default function AddUser() {
  return (
    <div className="bg-bgSoft p-5 rounded-[10px] mt-5">
      <form
        action=""
        className="grid grid-cols-2 gap-[10px_40px]"
      >
        <input
          className="col-span-2 lg:col-span-1 p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          type="text"
          placeholder="Username"
          name="Username"
          required
        />
        <input
          type="email"
          className="col-span-2 lg:col-span-1 p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          placeholder="Email"
          name="Email"
        />
        <input
          type="password"
          className="col-span-2 lg:col-span-1 p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          placeholder="Password"
          name="Password"
        />
        <input
          type="phone"
          className="col-span-2 lg:col-span-1 p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          placeholder="Phone"
          name="Phone"
        />
        <input
          type="cat"
          className="col-span-2 lg:col-span-1 p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          placeholder="Cat"
          name="Cat"
        />
        <select
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          name="isAdmin"
          id="isAdmin"
        >
          <option value="false">Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] "
          name="isActive"
          id="isActive"
        >
          <option value="false">Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          className="p-[30px] bg-bg text-text rounded-[5px] mb-[30px]
           border-[2px] border-[#2e374a] col-span-2"
          name="address"
          id=""
          rows="5"
          placeholder="Address"
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
