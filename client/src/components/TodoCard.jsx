import React, { useEffect, useState } from 'react'
import { FaTimes, FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteOneMutation, useChangeStatusMutation } from '../slices/getTodoApiSlice';
import { setTodoList, deleteOneTodo } from '../slices/todoSlice';
import { updateTodoState, showOneTodo } from '../slices/todoSlice';
import { useTodoListMutation } from '../slices/getTodoApiSlice'

const TodoCard = ({item}) => {
  const [stat, setStat] = useState(item.status)
  const [TodoList, {todoIsLoading}] = useTodoListMutation()
  const dispatch = useDispatch()
  const [deleteOne, {isLoading}] = useDeleteOneMutation()
  const [changeStatus, {isLoadingStatus}] = useChangeStatusMutation()
  
  let startTime = item.startTime? new Date(item.startTime): null
  let endTime = item.endTime? new Date(item.endTime): null

  useEffect(()=>{
    handleChangeStatus()
  },[stat])

  //change status on endTime
  if (endTime){
    if(stat !== "Complete"){
      const delay = endTime - new Date();
      if(delay>0){
        setTimeout(()=>{
          setStat("Pending")
          let al = alert('Task "'+item.task+'"status changes "Pending"')
        },delay)
      }
    }
  }

  const getList = async()=>{
    try{
      const res = await TodoList()
      if(res.data){
        dispatch(setTodoList(res.data))
      }
    }catch(err){
      console.log(err?.data?.message || err)
    }
  }

  const handleTodoDelete = async (e) =>{
    e.stopPropagation()
    try{
      const delOne = await deleteOne({
        id: item._id,
      }).unwrap()
      getList()
      console.log(delOne)
    }catch(err){
      console.log(err?.data?.message || err)
    }
  }

  const handleChangeStatus = async () =>{
    try{
      const change = await changeStatus({
        id: item._id,
        status: stat
      }).unwrap()
      console.log(change)
    }catch(err){
      console.log(err)
    }
  }

  const handleUpdate = (e) =>{
    e.stopPropagation()
    dispatch(updateTodoState({
      item,
      edit: true
    }))
  }

  const handleShow = () =>{
    const start = startTime ? formatDate(startTime): " "
    const end = endTime? formatDate(endTime): " "
    alert(
      'Task:   '+item.task+'\n'+
      'Comment   '+item.comment+'\n'+
      'Start Time   '+start+'\n'+
      'End Time   '+end+'\n'
    )

    // dispatch(showOneTodo(item))
  }
  const getDaySuffix= (day) =>{
    if (day > 3 && day < 21) return 'th'; // Covers 11th to 20th
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
  }
  const formatDate = (date) =>{
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const daySuffix = getDaySuffix(day);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}${daySuffix} ${month} ${year} | ${hours}:${minutes}`
  }

  return (
    <>
      <button onClick={handleShow} className="todo-card bg-white mb-10 p-10 min-w-[55%] min-h-[25vh] flex justify-start items-center relative shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.05]">
        <div className='todo-side-icon flex  absolute right-[10%] top-[15%]'>
          <select className='status outline-0 hover:cursor-pointer' value={stat} onClick={(e)=>e.stopPropagation()} onChange={(e)=>setStat(e.target.value)}>
            <option value="onGoing">onGoing</option>
            <option value="Pending">Pending</option>
            <option value="Complete">Complete</option>
          </select>
          <button className='delete-cross ml-5' onClick={handleTodoDelete}><FaTimes/></button>
        </div>
        <button className="edit text-2xl absolute right-[10%] bottom-[15%] transition-all duration-200 opacity-50 hover:opacity-100" onClick={handleUpdate}><FaRegEdit /></button>

        <div className="todo-detail flex flex-col w-[50%] text-left">
          <div className='task text-2xl'>{item.task}</div>
          <div className='task-time text-sm flex flex-col justify-between w-full mt-2'>
            <div className="start-time"><strong>Start Time:</strong> {item.startTime? formatDate(startTime):''}</div>
            <div className="end-time"><strong>End Time:</strong> {item.endTime? formatDate(endTime):''}</div>
          </div>
        </div>
      </button>
    </>
  )
}

export default TodoCard