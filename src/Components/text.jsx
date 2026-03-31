import React, { useContext } from "react";
import { Context } from "../store/Context";

export default function Text() {
  let { isactive, toggle, winner, full } = useContext(Context);


  if (winner) {
    return (
      <div className="text-2xl font-semibold text-white h-1/10">
        {winner === "X" ? <h1>Player 1 wins!</h1> : <h1>Player 2 wins!</h1>}
      </div>
    );
  }

  if (full) {
    return (
      <div className="text-2xl font-semibold text-white h-1/10">
        <h1>Match is a Draw</h1>
      </div>
    );
  }

  return (
    <div className="text-2xl font-semibold text-white h-1/10">
      {toggle ? (
        <h1>Now it's Player One's turn</h1>
      ) : (
        <h1>Now it's Player Two's turn</h1>
      )}
    </div>
  );
}