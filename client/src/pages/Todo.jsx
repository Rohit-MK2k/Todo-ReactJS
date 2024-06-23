import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import {useFormik} from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { useAddTodoMutation } from '../slices/getTodoApiSlice'
import { addToList } from '../slices/todoSlice'
import TodoList from '../components/TodoList'


function Todo() {
  const {isOpen} = useSelector((state) => state.toggleHamburger)
  const dispatch = useDispatch()
  const [AddTodo, {isLoading}] = useAddTodoMutation()

  const [disable, setDisable] = useState(true)
  const validate = (value) =>{
    let err = {}
    let startTime = new Date(value.startTime)
    let endTime = new Date(value.endTime)
    const now = new Date();
    if (!value.task){
      err.tasks = "Please Enter your task"
      setDisable(true)
    }
    else{
      setDisable(false)
    }
    if(endTime<startTime){
      err.endTime = "enterd date and time is less than the start time"
      setDisable(true)
    }else{
      setDisable(false)
    }
    return err
  }
  console.log()
  const formik = useFormik({
    initialValues: {
      task: '',
      comment: '',
      startTime: '',
      endTime: '',
    },
    validate,
    onSubmit: async values =>{

      try{
        const res = await AddTodo({
          task: values.task,
          comment: values.comment,
          startTime: values.startTime,
          endTime: values.endTime,
          isComplete: 'onGoing',
        }).unwrap()
        dispatch(addToList({...res}))
      }catch(err){
        console.log(err?.data?.message || err)
      }
    }
  })
  return (
    <>
        <div className={`home`}>
          <NavBar/>
          <div className="home-body min-h-[100vh] flex flex-col  items-center w-full">
            <form onSubmit={formik.handleSubmit} className='my-20 py-20 flex flex-col justify-between items-center bg-white min-h-[70vh] min-w-[55%]'>
              <div className="form-group flex flex-col w-2/3">
                <input type="text" name="task" id="task" className='form-field p-2' placeholder='Enter Your Name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.task}/>
                <label htmlFor="task" className='form-label'>Enter your name of the Task</label>
                {formik.touched.task && formik.errors.task ? <div className='pt-1 text-xs text-red-600'>{formik.errors.task}</div> : null}
              </div>
              <div className="form-group flex flex-col w-2/3">
                <textarea name="comment" id="comment" className='form-field p-2 h-32' placeholder='Enter Your Name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.comment}/>
                <label htmlFor="comment" className='form-label'>Comment</label>
                {formik.touched.comment && formik.errors.comment ? <div className='pt-1 text-xs text-red-600'>{formik.errors.name}</div> : null}
              </div>
              <div className="form-date-group flex flex-row justify-between w-2/3">
                <div className="form-group flex flex-col w-2/5">
                <label htmlFor="endTime" className='text-xl py-1'>Start</label>
                  <input type='datetime-local' name="startTime" id="startTime" className='outline-0' onChange={formik.handleChange} onClockClose={formik.handleBlur} value={formik.values.startTime} />
                  {formik.touched.startTime && formik.errors.startTime ? <div className='pt-1 text-xs text-red-600'>{formik.errors.startTime}</div> : null}
                </div>
                <div className="form-group flex flex-col w-2/5">
                  <label htmlFor="endTime" className='text-2xl py-1'>End</label>
                  <input type='datetime-local' name="endTime" id="endTime" className='outline-0' onChange={formik.handleChange} onClockClose={formik.handleBlur} value={formik.values.endTime} />
                  {formik.touched.endTime && formik.errors.endTime ? <div className='pt-1 text-xs text-red-600'>{formik.errors.endTime}</div> : null}
                </div>
              </div>
              
              <button type="submit" className='border-2 w-2/3 border-black p-2 hover:bg-black hover:text-white transtion duration-150 disabled:hover:bg-white disabled:hover:text-black' disabled={isOpen || disable}>{isLoading ? '...loading': 'ADD'}</button>
            </form>
            
            <TodoList/>

          </div>
        </div>           
    </>
  )
}

export default Todo