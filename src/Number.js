import React from 'react'
import { useState } from 'react';

function Number(props) {
 const[num, setnum]= useState(0);
  return (
    <>
      {props.title}
      <div>
        {num}
        </div>
        <div>
      <button className='outline outline-2'onClick={()=>setnum(num+1)}>increment</button>
      </div>
      <button className='outline outline-2'onClick={()=>setnum(num-1)}>decrement</button>
    </>
  )
}

export default Number;
