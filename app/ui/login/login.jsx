import React from "react";

export default function Login() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <form
        className="bg-bgSoft p-[50px] rounded-[10px] 
        w-[500px] h-[500px] flex flex-col justify-center gap-[50px]"
        action=""
      >
        <h1 className="text-center text-4xl font-bold">Login</h1>
        <input
          type="text"
          className="p-[30px] w-full border-[2px]
           border-[#2e374a] bg-bg text-text rounded-[5px]"
          placeholder="UserName"
        />
        <input
          type="password"
          className="p-[30px] w-full border-[2px]
           border-[#2e374a] bg-bg text-text rounded-[5px]"
          placeholder="Password"
        />
        <button
          className="p-[30px] w-full bg-teal-700 text-text border-none
           cursor-pointer rounded-[5px]"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
