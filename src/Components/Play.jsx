import React, { useState } from "react";

export default function Play() {
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", ""]);
  const [toggle, setToggle] = useState(true);

  function handleClick(index) {
    if (items[index] === "") {
      let value = toggle ? "X" : "0";

      let newItems = [...items];
      newItems.splice(index, 1, value);

      setItems(newItems);
      setToggle(!toggle);
    }
  }

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
