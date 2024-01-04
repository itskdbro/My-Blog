import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { darkmode, isLoading, page, handlePageChange, totalPages } =
    useContext(AppContext);
  return (
    <div
      className={`w-full flex items-center justify-center border-t shadow-md fixed bottom-0 py-3 text-sm
      ${
        darkmode
          ? "bg-black text-white border-zinc-700"
          : "bg-[#240046] text-white"
      }`}
    >
      <div className=" w-full max-w-[350px] md:max-w-[700px] flex items-center justify-between  ">
        <div>
          {isLoading ? (
            <p className="font-medium">Page</p>
          ) : (
            <p className="font-medium">
              Page {page} of {totalPages}
            </p>
          )}
        </div>
        <div className="flex gap-4">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="border-2 border-white-400 px-4 py-1 rounded-md font-medium"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="border-2  border-gray-white px-4 py-1 rounded-md font-medium"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
