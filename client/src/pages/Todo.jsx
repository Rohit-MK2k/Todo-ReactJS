import React from 'react'
import NavBar from '../components/NavBar'
import { useSelector, useDispatch } from 'react-redux'
import { setHamburgerOpen } from '../slices/hamburgerToggleSlice'


function Todo() {
  const {isOpen} = useSelector((state) => state.toggleHamburder)
  return (
    <>
      <div className='home '>
        <NavBar/>
        <div className="home-body h-[300vh]"></div>
      </div>        
    </>
  )
}

export default Todo