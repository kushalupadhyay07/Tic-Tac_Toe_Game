import { typeOfDependencies } from "mathjs";
import React, { useContext } from "react";
import { Context } from "../store/Context";

export default function Text() {
  let { isactive, toggle } = useContext(Context);
  return (
    <div className="text-2xl font-semibold text-white h-1/10">
      {isactive && (
        <div>
          {toggle ? (
            <h1>Now it's Player One's turn</h1>
          ) : (
            <h1>Now it's Player Two's turn</h1>
          )}
        </div>
      )}

      {!isactive && (
        <div>
          {toggle ? <h1>Player 2 Wins 🎉</h1> : <h1>Player 1 Wins 🎉</h1>}
        </div>
      )}
    </div>
  );
}
