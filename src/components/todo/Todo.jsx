import React from 'react'
import "./style.css"

function Todo({todos}) {
  console.log(todos)
  return (
    <div className='todo-box'>
      <h1 className='todo-title'>{todos.todoTitle}</h1>
      <p>{todos.todoInput}</p>
      <div className='todo-btns'>
        <button>삭제하기</button>
        <button>완료하기</button>
      </div>
    </div>
  )
}

export default Todo