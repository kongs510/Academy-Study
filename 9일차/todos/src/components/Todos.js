import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import "./Todos.css";
//데이터관리, 삭제,추가, 토글행동
const Todos = () => {
   const no = useRef(1) //3번부터 시작
   const [todos ,setTodos] =useState([])
   // {id:1,text:"청소하기",done:false},
   // {id:2,text:"저녁먹기",done:false},


   const onAdd = (text) => {
      setTodos([
         ...todos,
         {
            id:no.current++,
            text,
            done:false
         }
      ])
   }

   //삭제 filter 
   const onRemove = (id)=> {
      const newData=todos.filter(todo=>todo.id !== id)
      setTodos(newData)
   }
   //토글 -map? 삼항연산자 => done:true/false
   const onToggle=(id)=>{
     const newData =todos.map(todo=> todo.id===id?{...todo,done:!todo.done}:todo)
     setTodos(newData)

   }
   return (
      <div className="Todos">
         <h1>할일 만들기</h1>
         <TodoForm onAdd={onAdd}/>
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </div>
   );
};

export default Todos;