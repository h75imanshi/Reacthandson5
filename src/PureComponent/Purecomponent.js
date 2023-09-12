import React, {useState} from 'react'
import '../App.css'
const Purecomponent=()=>
 {
    const [name]=useState("Himanshi")
  return (
    
    <div className='h1'>
       {name}
    </div>
  )
}

export default Purecomponent;
