import React from 'react'
import Hamburger from './Hamburger'
import { useSelector, useDispatch } from 'react-redux'
import { setHamburgerOpen } from '../slices/hamburgerToggleSlice'


const NavBar = () => {
  const {isOpen} = useSelector((state) => state.toggleHamburder)
  const dispatch = useDispatch()
  console.log(isOpen)
  return (
    <>
      <div className='navber h-16 border-b-2 border-black flex'>
        <button className="hamburger bg-white flex justify-center items-center" onClick={()=> dispatch(setHamburgerOpen(isOpen? false:true))}>
          <Hamburger/>
        </button>
        <div className="nav-header text-4xl m-auto">Todo</div>
      </div>
    </>
  )
}

export default NavBar