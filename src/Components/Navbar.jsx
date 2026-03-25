import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-15/100 border-2 flex justify-center items-center ">
      <div className="flex gap-10 border-2 w-[300px] justify-between p-3 rounded-2xl text-white bg-orange-800 box-border h-7/10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-yellow-400 font-bold ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/docs"
          className={({ isActive }) =>
            `hover:text-yellow-400 font-bold ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          Docs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-yellow-400 font-bold ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
}
