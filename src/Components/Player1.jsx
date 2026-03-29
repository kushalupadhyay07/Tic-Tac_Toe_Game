import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/Context";

export default function Player1() {
  let { toggle, isactive } = useContext(Context);
  let [wins, setwins] = useState(0);
  useEffect(() => {
    if (!isactive && !toggle) {
      setwins(wins + 1);
    }
  }, [isactive, toggle]);
  return (
    <div className="w-15/100 border-2 h-4/10 flex flex-col justify-center items-center bg-orange-500 rounded-tr-3xl rounded-br-2xl">
      <h1 className="text-xl font-bold ">Player 1</h1>
      <h2 className="text-xl font-bold ">Score</h2>
      <h1 className="text-5xl font-bold text-amber-50">{wins}</h1>
    </div>
  );
}
