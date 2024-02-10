import React from 'react'
import TodoForm from './TodoForm'
import { Container } from 'react-bootstrap'
import TaskList from './TaskList'

function Todo() {
  return (
    <Container ><h3 className='mt-3'> Apurva's Todo List</h3>
    <div style={{display:'flex'}}>
    <TodoForm></TodoForm>
    <TaskList></TaskList>
    </div>
   </Container>
  )
}

export default Todo