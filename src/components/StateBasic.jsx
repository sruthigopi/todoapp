import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
   
    var[fname,setfname]=useState('sruthi')
    var[val,setVal]=useState()
    const changeName=()=>{
        console.log('clicked');
        setfname(val)
    }
    const inputHandler =(e)=>{
console.log(e.target.value);
setVal(e.target.value)
    }
  return (
    <div style={{paddingTop:'90px'}}>
        <Typography>Welcome {fname}</Typography>
       <TextField label='Ender name here' variant='outlined' onChange={inputHandler}/>
       <br /><br />
        <Button variant='contained' color='error'onClick={changeName}>change</Button>
    </div>
  )
}

export default StateBasic