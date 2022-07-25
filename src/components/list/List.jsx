import React from 'react'
import Todo from '../todo/Todo'
import './style.css'

function List({todos}) {
  return (
    <div className='List'>
      <h1>Working!</h1>
      <div className='todo-listworking'> 
      {todos.map((todo)=>(
        <div className='todo' key={todo.id}>
          <Todo todos={todos}/>
        </div>
      ))}
      </div>
      <h1>Done!</h1>
    </div>
  )
}

export default List