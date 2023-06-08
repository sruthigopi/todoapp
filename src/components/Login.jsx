import React from 'react'
import { Button, TextField, Typography } from '@mui/material';

const Login = () => {
  return (
    <div>
        <input placeholder='Username'/>
    <br/><br/>
    <input type='password' placeholder='Password'/>
    <br/><br/>
<button>Submit</button>
<br/><br/><br/><br/><br/>
<Typography variant='h4'>Login page</Typography>
<br/>
<TextField variant='outlined' label='Username'/>
<br/><br/>
<TextField variant='outlined' label='Password'/>
<br/><br/>
<Button variant="contained">Submit</Button>
    </div>
  )
}

export default Login