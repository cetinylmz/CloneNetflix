import React from "react";


function Navbar() {
  return (
    <div className="flex justify-between items-center  p-6 z-[100] w-full absolute">
      <h1 className="taext-red-600 text-4xl font-bold cursor-pointer">
        NETFLİX
      </h1>
      <div>

          <button className="py-4 rounded cursor-pointer text-white mx-2">
            Login
          </button>
        
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white mx-2">
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
