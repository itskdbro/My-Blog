import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Spinner() {
  const { darkmode } = useContext(AppContext);
  return (
    <div
      className={`w-full h-screen flex justify-center items-center text-4xl font-bold pb-[70px] ${
        darkmode ? "bg-black text-white " : "bg-[#e0aaff] text-black "
      } `}
    >
      Loading..
    </div>
  );
}

export default Spinner;
