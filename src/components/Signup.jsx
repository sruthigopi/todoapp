import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h4'>Welcome To My App</Typography>
        <br />
        <TextField variant='outlined' label='Name'/>
        <br /> <br />
        <TextField variant='outlined' label='Place'/>
        <br /> <br />
        <TextField variant='outlined' label='age'/>
        <br /> <br />
        <TextField variant='outlined' label='gender'/>
        <br /> <br />
        <TextField variant='outlined' label='email'/>
        <br /> <br />
        <TextField variant='outlined' label='password' type='password'/>
        <br /> <br />
        <Button variant="contained">submit</Button>
    </div>
  )
}

export default Signup