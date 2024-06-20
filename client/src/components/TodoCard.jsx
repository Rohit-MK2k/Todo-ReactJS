import React from 'react'
import { FaTimes, FaRegEdit } from "react-icons/fa";

const TodoCard = () => {
  return (
    <>
      <div className="todo-card bg-white mb-10 p-10 min-w-[55%] min-h-[25vh] flex items-center relative shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.05]">
        <div className='todo-side-icon flex  absolute right-[10%] top-[15%]'>
          <select className='status outline-0 hover:cursor-pointer'>
            <option value="onGoing">onGoing</option>
            <option value="Pending">Pending</option>
            <option value="Complete">Complete</option>
          </select>
          <button className='delete-cross ml-5'><FaTimes/></button>
        </div>
        <button className="edit text-2xl absolute right-[10%] bottom-[15%] transition-all duration-200 opacity-50 hover:opacity-100"><FaRegEdit /></button>

        <div className="todo-detail flex flex-col">
          <div className='task text-2xl'>Hi this is test task</div>
          <div className='task-time text-sm flex justify-between p-2'>
            <div className="start-time">1</div>
            <div className="end-time">2</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoCard