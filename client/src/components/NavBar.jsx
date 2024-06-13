import {React, useEffect, useRef, useState} from 'react'
import Hamburger from './Hamburger'
import { useSelector, useDispatch } from 'react-redux'
import { setHamburgerOpen } from '../slices/hamburgerToggleSlice'


const NavBar = () => {
  const navbar = useRef(null)
  const [isVisiable, setVisiable] = useState(false)
  // toggle state of open/close humburger icon from global state
  const {isOpen} = useSelector((state) => state.toggleHamburder)
  const dispatch = useDispatch()
  
  const options = {
    rootMargin: "-30px",
  }
  let humburgerDynamicStyle = (isOpen) ? 'fixed z-20 border-0 rounded-full top-[4%] left-[3%] p-3 scroll-humburger-animation': (isVisiable) ? 'absolute z-20': 'fixed z-20 border-0 rounded-full top-[6%] left-[5%] p-3 bg-black/20 scroll-humburger-animation'

  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      setVisiable(entry.isIntersecting)
    },options)

    if (navbar.current) {
      observer.observe(navbar.current)
    }

    return () =>{
        observer.disconnect()
    }
    
  }, [])
  console.log("is visible ",isVisiable)
  console.log("is open ", !isOpen)
  console.log(isVisiable || !isOpen)
 
  return (
    <>
      <div className={`side-nav fixed z-10 h-screen flex flex-col items-center text-center text-3xl border-0 transition-all duration-500 pt-32 pb-[4.5rem] bg-[#FFBB5C] ${isOpen ? 'w-2/5 shadow-[0_0_0_10000px_rgba(0,0,0,.50)]': 'w-0 [&_ul]:hidden'}`}>
        <ul className='flex flex-col h-full'>
          <li className='p-2'>My Profile</li>
          <li className='p-2'>About Us</li>
          <li className='log-out p-2 mt-auto hover:cursor-pointer'>Logout</li>
        </ul>
        
      </div>
      <div className='navbar h-20 border-b-2 px-16 border-black flex flex-row items-center relative' ref={navbar}>
        <button className={`hamburger p-1 transition-all duration-300 z-20 ${humburgerDynamicStyle}`}  onClick={()=> dispatch(setHamburgerOpen(isOpen? false:true))}>
          <Hamburger/>
        </button>
        <div className="nav-header text-5xl m-auto">Todo</div>
      </div>
  
    </>
  )
}

export default NavBar