import React from 'react'

const ShowTodo = () => {
  return (
    <>
        <div className="todo-card bg-white mb-10 p-10 min-w-[55%] min-h-[25vh] flex justify-start items-center relative shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.05]">
            <div className='todo-side-icon flex  absolute right-[10%] top-[15%]'>
                <select className='status outline-0 hover:cursor-pointer' value={stat} onChange={handleChangeStatus}>
                    <option value="onGoing">onGoing</option>
                    <option value="Pending">Pending</option>
                    <option value="Complete">Complete</option>
                </select>
                <button className='delete-cross ml-5' onClick={handleClose}><FaTimes/></button>
            </div>

            <div className="todo-detail flex flex-col w-[50%] text-left">
                <div className='task text-2xl'>{item.task}</div>
                <div className='task-time text-sm flex flex-col justify-between w-full mt-2'>
                    <div className="start-time"><strong>Start Time:</strong> {item.startTime? formatDate(startTime):''}</div>
                    <div className="end-time"><strong>End Time:</strong> {item.endTime? formatDate(endTime):''}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowTodo