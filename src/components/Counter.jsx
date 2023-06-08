import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount] =useState(0)
    const up=()=>{
        console.log('up');
setCount(count+1)
    }
    const down=()=>{
        console.log('down');
        setCount(count-1)
    }
  return (
    <div style={{paddingTop:'90px'}}>
        <Typography variant='h3' >counter value:{count}</Typography>
        <Button variant='contained' color='success' onClick={up}>+</Button>
        <Button variant='contained' color='error'  onClick={down}>-</Button>
    </div>
  )
}

export default Counter