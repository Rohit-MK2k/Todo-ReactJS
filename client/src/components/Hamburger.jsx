import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setHamburgerOpen } from '../slices/hamburgerToggleSlice'

const Hamburger = () => {
    const {isOpen} = useSelector((state) => state.toggleHamburger)
    // useEffect(()=>{
 
    // },[isOpen])
    const dash1 =  isOpen ? 'rotate-45' : 'rotate-0 translate-y-[-0.5rem]'
    const dash2 =  isOpen ? 'opacity-0' : ''
    const dash3 =  isOpen ? 'rotate-[-45deg]' : 'rotate-0 translate-y-2'
    return (
        <>
            <div className='humburger-icon w-8 h-8 z-1000 relative flex items-center'>
                <span className={`block bg-black w-full h-1 rounded-lg transition-all duration-300 absolute ${dash1}`}></span>
                <span className={`block bg-black w-full h-1 rounded-lg transition-all duration-300 absolute ${dash2}`}></span>
                <span className={`block bg-black w-full h-1 rounded-lg transition-all duration-300 absolute ${dash3}`}></span>
            </div>
        </>
    )
}

export default Hamburger