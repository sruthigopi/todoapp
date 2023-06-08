import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
           <Toolbar>
            <Typography variant='h4' style={{color:'red',fontFamily:'cursive'}}>First App</Typography>
          <Button color='secondary'>Login</Button>
          <Button color='secondary'>Signup</Button>
           </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar