import React, { useEffect, useState } from 'react'
import { Button,Typography} from '@mui/material'
const UseE = () => {
    var[fname,setfname]=useState('Home')
    const gallary= ()=>{
        setfname('Gallary')
    }
    const cont= ()=>{
        setfname('Contact')
    }
    const hom= ()=>{
        setfname('Home')
    }
    useEffect(()=>{
        cont()
    },[])
  return (
    <div style={{paddingTop:'110px'}}>
        <Button variant='contained' color='primary'onClick={hom}>Home</Button>
        <Button variant='contained' color='secondary'onClick={gallary}>gallary</Button>
        <Button variant='contained' color='error'onClick={cont}>Contacts</Button>
        <Typography>Welcome to {fname}</Typography>
    </div>
  )
}

export default UseE
