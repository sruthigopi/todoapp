import React, { useState } from 'react'

const Mapping = () => {
    var [names,setnames]=useState(['sruthi','gopinath','meena', 'monu'])
  return (
  
    <div>
<ol>
          {names.map((value,index)=>{
            return(
                <li key={index}>{value}</li>
            )
          })}
        </ol>
    </div>
  )
}

export default Mapping