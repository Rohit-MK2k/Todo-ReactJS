import {React, useEffect, useRef, useState} from 'react'
import Hamburger from './Hamburger'
import { useLogoutMutation } from '../slices/userApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setHamburgerOpen } from '../slices/hamburgerToggleSlice'
import { useNavigate, Link } from 'react-router-dom'
import { clearCredentials } from '../slices/authSlice'




const NavBar = () => {
  const sideNav = useRef(null)
  const nav = useRef(null)

  const [isVisiable, setVisiable] = useState(false)
  // toggle state of open/close humburger icon from global state
  const {isOpen} = useSelector((state) => state.toggleHamburger)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logout, {isLoading}] = useLogoutMutation()
  
  const options = {
    rootMargin: "-30px",
  }
  let humburgerDynamicStyle = (isOpen) ? 'fixed z-20 border-0 rounded-full top-[4%] left-[3%] p-3 scroll-humburger-animation': (isVisiable) ? 'absolute z-20': 'fixed z-20 border-0 rounded-full top-[6%] left-[5%] p-3 bg-black/20 scroll-humburger-animation'

  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      setVisiable(entry.isIntersecting)
    },options)

    if (nav.current) {
      observer.observe(nav.current)
    }

    return () =>{
        observer.disconnect()
    }
    
  }, [])

  function handleClickOutside(event) {
    if(isOpen){
      if (sideNav.current && !sideNav.current.contains(event.target)) {
        dispatch(setHamburgerOpen(false))
      }
    }
  }

  // closes Side navber by clicking outside 
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [sideNav, isOpen]);

  
  const handleLogOut = async() =>{
    try{
      const res = await logout()
      dispatch(clearCredentials())
      dispatch(setHamburgerOpen(false))
      navigate('/')
    }catch(err){
      console.log("Something want wrong")
    }
  }

  return (
    <>
      <div ref={ sideNav } className={`side-nav outline-0 fixed z-10 h-screen flex flex-col items-center text-center text-3xl border-0 transition-all duration-500 pt-32 pb-[4.5rem] bg-[#FFBB5C] ${isOpen ? 'w-2/5 shadow-[0_0_0_10000px_rgba(0,0,0,.50)]': 'w-0 [&_ul]:hidden'}`}>
        <ul className='flex flex-col items-center h-full w-[90%]'>
          <li className='p-2 my-2 transition-all duration-300 rounded-full hover:bg-black/20 w-[75%] hover:scale-105'><Link to='/home' onClick={()=>dispatch(setHamburgerOpen(false))}>Home</Link></li>
          <li className='p-2 my-2 transition-all duration-300 rounded-full hover:bg-black/20 w-[75%] hover:scale-105'><Link to='profile' onClick={()=>dispatch(setHamburgerOpen(false))}>My Profile</Link></li>
          <li className='p-2 my-2 transition-all duration-300 rounded-full hover:bg-black/20 w-[75%] hover:scale-105'><Link to='about' onClick={()=>dispatch(setHamburgerOpen(false))}>About Developer</Link></li>
          <li className='log-out p-2 mt-auto rounded-full transition-all w-full duration-300 hover:bg-black/20 hover:cursor-pointer'><button onClick={handleLogOut}>{isLoading? 'Logging Out...':'Logout'}</button></li>
        </ul>
        
      </div>
      <div className='navbar h-20 border-b-2 px-16 bg-[#FFBB5C] border-black flex flex-row items-center relative' ref={nav}>
        <button className={`hamburger p-1 transition-all duration-300 z-20 ${humburgerDynamicStyle}`}  onClick={()=> dispatch(setHamburgerOpen(isOpen? false:true))}>
          <Hamburger/>
        </button>
        <div className="nav-header text-5xl m-auto">Todo</div>
      </div>
  
    </>
  )
}

export default NavBar