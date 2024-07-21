import React, { useState } from 'react'
import { FaTimes, FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteOneMutation, useChangeStatusMutation } from '../slices/getTodoApiSlice';
import { deleteOneTodo } from '../slices/todoSlice';
import { updateTodoState, showOneTodo } from '../slices/todoSlice';

const TodoCard = ({item}) => {
  const [stat, setStat] = useState(item.status)

  const dispatch = useDispatch()
  const [deleteOne, {isLoading}] = useDeleteOneMutation()
  const [changeStatus, {isLoadingStatus}] = useChangeStatusMutation()
  

  const handleTodoDelete = async () =>{
    try{
      const delOne = await deleteOne({
        id: item._id,
      }).unwrap()
      dispatch(deleteOneTodo(item._id))
      console.log(delOne.data.message)
    }catch(err){
      console.log(err?.data?.message || err)
    }
  }

  const handleChangeStatus = async (e) =>{
    setStat(e.target.value)
    try{
      const change = await changeStatus({
        id: item._id,
        status: stat
      }).unwrap()
      console.log(change.message)
    }catch(err){
      console.log(err)
    }
  }

  const handleUpdate = (e) =>{
    dispatch(updateTodoState({
      item,
      edit: true
    }))
  }

  const handleShow = () =>{
    alert(
      'Task:   '+item.task+'\n'+
      'Comment   '+item.comment+'\n'+
      'Start Time   '+formatDate(startTime)+'\n'+
      'End Time   '+formatDate(endTime)+'\n'
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

  let startTime = new Date(item.startTime)
  let endTime = new Date(item.endTime)
  return (
    <>
      <button onClick={handleShow} className="todo-card bg-white mb-10 p-10 min-w-[55%] min-h-[25vh] flex justify-start items-center relative shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.05]">
        <div className='todo-side-icon flex  absolute right-[10%] top-[15%]'>
          <select className='status outline-0 hover:cursor-pointer' value={stat} onChange={handleChangeStatus}>
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