import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

function DarkMode() {
  const { darkmode, DarkModeHandler } = useContext(AppContext);
  return (
    <div className="">
      {!darkmode ? (
        <button
          onClick={() => DarkModeHandler(true)}
          className="rounded-md py-2 px-3  bg-black text-white text-xs md:text-md font-semibold flex items-center gap-3"
        >
          <span>Dark Mode</span> <BsFillMoonStarsFill className="text-white" />
        </button>
      ) : (
        <button
          onClick={() => DarkModeHandler(false)}
          className="rounded-md py-2 px-3 bg-white text-black text-xs md:text-md font-semibold flex items-center gap-3"
        >
          <span>Light Mode</span> <MdSunny />
        </button>
      )}
    </div>
  );
}

export default DarkMode;
