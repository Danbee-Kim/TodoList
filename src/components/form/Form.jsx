import React,{useState} from 'react'
import "./style.css"

function Form({addTodo}) {

  const [list,setList]=useState({
    title:"",
    input:"",
  })
 const {title,input}=list;  // 비구조화 할당을 통해 값 추출
  console.log(list,"list")
  const Change=(e)=>{
    const{value,name}=e.target;  // 우선 e.target 에서 name 과 value 를 추출
    console.log(name,value) 
    console.log({...list}) 
    setList({...list,   // 기존의 list 객체를 복사한 뒤
      [name]:value}) // name 키를 가진 값을 value 로 설정
    
  }


  const submitTodo =(e)=>{
    e.preventDefault()
    const todo={
      todoTitle:title,
      todoInput:input,
      id:Date.now(),
      isDone:false,
      }
    todo.todoTitle!==""&&todo.todoInput!==""? addTodo(todo):alert('입력하세요')
    setList(
      {title:"",
      input:""}
    )
  }
  

  return (
    <form className='todo-form'onSubmit={submitTodo}>
      <div>
        <label htmlFor='title'>제목</label>
        <input onChange={Change} id='title'type="text" value={title} name="title"/>
        <label htmlFor='text' >내용</label>
        <input onChange={Change} id='text'type="text" value={input} name="input"/>
      </div>
        <div className='todo-button'>
        <button type='submit'>추가하기</button>
      </div>
    </form>
  )
}

export default Form