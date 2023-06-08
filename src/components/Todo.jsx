import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Todo = () => {

  var [todos,setTodos]=useState([]);
  var [inValue,setInValue]= useState('')
const addTodo=()=>{
  console.log('button cliked');
  if(inValue.trim !== ''){
  setTodos([...todos,inValue]);
  setInValue('');
  }
}

const inputChange = (e)=>{
  console.log(e.target.value)
  setInValue(e.target.value)
}
  return (
    <div>
        <Typography variant='h4' style={{paddingTop:'50px',paddingBottom:'50px'}}>ToDo Application</Typography>
       <TextField label='Ender Todo' variant='outlined' value={inValue} onChange={inputChange}/>
       <br /><br /><br /><br />
         <Button variant='contained' color='success' onClick={addTodo}>Add Todo</Button>

         <ol>
          {todos.map((value,index)=>{
        return(
                <li key={index}>{value}</li>
        )
          })}
        </ol>
    </div>
  )
}

export default Todo