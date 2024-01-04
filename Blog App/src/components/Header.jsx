import React, { useContext } from "react";
import DarkMode from "./DarkMode";
import { AppContext } from "../context/AppContext";

function Header() {
  const { darkmode } = useContext(AppContext);

  return (
    <div
      className={`w-full border-b shadow-sm fixed top-0 ${
        darkmode
          ? "bg-black text-white border-zinc-800 shadow-zinc-700"
          : "bg-[#240046] text-white "
      }
      `}
    >
      <header className="max-w-[350px] md:max-w-[700px] mx-auto py-4  flex items-center justify-between ">
        <p className="font-bold text-lg sm:text-2xl">MY BLOGS</p>
        <DarkMode />
      </header>
    </div>
  );
}

export default Header;
