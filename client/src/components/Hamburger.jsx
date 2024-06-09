import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setHamburgerOpen } from '../slices/hamburgerToggleSlice'

const Hamburger = () => {
    const {isOpen} = useSelector((state) => state.toggleHamburder)
    // useEffect(()=>{
      
    // },[isOpen])
    const dash1 =  isOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'
    const dash2 =  isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 top-2'
    const dash3 =  isOpen ? 'rotate-[-45deg] top-2' : 'rotate-0 top-4'
    return (
        <>
            <div className='w-6 z-10 relative flex justify-center items-center flex-col'>
                <span className={`block bg-black w-full h-1 rounded-lg transition-all duration-300 absolute ${dash1}`}></span>
                <span className={`block bg-black w-full h-1 rounded-lg transition-all duration-300 absolute ${dash2}`}></span>
                <span className={`block bg-black w-full h-1 rounded-lg transition-all duration-300 absolute ${dash3}`}></span>
            </div>
        </>
    )
}

export default Hamburger