import React, {useEffect} from 'react'
import TodoCard from './TodoCard'
import { useNavigate } from 'react-router-dom'
import { useTodoListMutation } from '../slices/getTodoApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setTodoList, deleteAllTodoList } from '../slices/todoSlice'

const TodoList = () => {
  const { list } = useSelector((state) => state.todoList)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [TodoList, {isLoading}] = useTodoListMutation()

  const getList = async()=>{
    try{
      const res = await TodoList()
      dispatch(setTodoList(res))
    }catch(err){
      console.log(err?.data?.message || err.error)
    }
  }

  useEffect(()=>{
    getList()
  },[])

  return (
      list.lenght>0 ? list.map((items)=><TodoCard/>) : <div className='flex justify-center items-center text-3xl'>No item found</div>            
  )
}

export default TodoList