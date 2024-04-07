import React from 'react'
import { useReducer } from 'react'
import TodoCard from './TodoCard'
import AddTodo from './AddTodo'
import { useDispatch,useSelector } from 'react-redux'
import { add } from '../../Redux/todo/action'




const Todo = () => {
          const todos=useSelector((state)=>state.todo)
          const dispatch=useDispatch()

          const handleAdd=(text)=>{
            // console.log("clicked")
            const newTodo={
              id:Date.now(),
              title:text,
              status:false
            }
            dispatch(add(newTodo))
          }
  return (
    <div>
      {todos.map((todo)=>{
        return <TodoCard key={todo.id} {...todo}/>
      })}
      <AddTodo handleAdd={handleAdd}/>
        
    </div>
  )
}

export default Todo