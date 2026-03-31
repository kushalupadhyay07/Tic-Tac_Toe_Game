import React, { useContext } from "react";
import Player1 from "../Components/Player1";
import Player2 from "../Components/Player2";
import Play from "../Components/Play";
import Text from "../Components/text";
import { Context } from "../store/Context";

export default function Home() {
  let {newgame}=useContext(Context)
  return <div className="h-screen  flex flex-col items-center">
    
      <Text></Text>
    
    <div className="flex justify-between box-border p-3 h-7/10 items-center  w-full">
      <Player1></Player1>
      <Play></Play>
      <Player2></Player2>
    </div>
     <button className="w-2/10 border-2 h-[50px] cursor-pointer bg-orange-500 text-white font-bold rounded-2xl active:bg-amber-500 hover:bg-amber-600" onClick={newgame}>
      New Game
     </button>
    

  </div>;
}
