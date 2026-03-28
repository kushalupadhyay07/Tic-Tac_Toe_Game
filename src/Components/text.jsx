import { typeOfDependencies } from "mathjs";
import React, { useContext } from 'react'
import { Context } from "../store/Context";

export default function Text() {
  let {isactive}=useContext(Context)
  return (
    <div className="text-2xl font-semibold  text-white h-1/10 ">
      {
        !isactive&& <h1>Hello </h1>
      }
    </div>
  )
}
