import React from 'react'
import {Link} from 'react-router-dom'

function Splash() {
    return (
        <>
            <div className='splash flex flex-col justify-center items-center h-screen '>
                <div className="splash-container flex flex-col justify-center items-center bg-white gap-8 rounded-md    ">
                    <div className="header-splash">TODO</div>
                    <div className="splash-link-container flex flex-row justify-center items-center gap-5">
                        <Link className='splash-link py-2.5 px-5 flex justify-center items-center' to='/signup'>Sign Up</Link>
                        <Link className='splash-link py-2.5 px-5 flex justify-center items-center' to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Splash