import React, { useContext, useState } from "react";
import { Context } from "../store/Context";

export default function Play() {
 let {items,setItems,toggle,setToggle,handleClick}=useContext(Context)

  return (
    <div className="w-25/100 border-2 h-9/10 grid grid-cols-3 gap-2 p-2 bg-yellow-100">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="border-2 cursor-pointer rounded-2xl flex items-center justify-center text-3xl bg-orange-700 hover:bg-yellow-500 active:bg-amber-600 h-[80px]"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
