import React,{useState} from 'react'
import "./style.css"
import Form from '../form/Form';
import List from '../list/List';
import Header from '../header/Header';

function Layout() {
  const [todos,setTodos]=useState([]);
  
  
  const addTodo =(todo)=>{
    const newTodos=[...todos,todo]
    setTodos(newTodos) 
  
   }
   

  return (
    <div className='layout'>
    <Header/>
    <Form addTodo={addTodo} todos={todos}/>
    <List todos={todos}/>
    </div>
  )
}

export default Layout
