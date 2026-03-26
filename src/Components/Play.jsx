import React from 'react'

export default function Play() {
  let items=[" "," "," "," "," "," "," "," "," ",];

  return (
    <div className='w-25/100 border-2 h-9/10 grid grid-cols-3 gap-2 box-border p-2 bg-yellow-100'>
      {
        items.map((item,index)=>{
          return <div className='border-2 cursor-pointer rounded-2xl bg-orange-700 hover:bg-yellow-500 active:bg-amber-600' >

          </div>
        })
      }
      
    </div>
  )
}
