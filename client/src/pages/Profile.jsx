import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Profile = () => {
  const {userInfo} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  console.log(userInfo)

  const openChangePassword = () =>{
    
  }
  return (
    <>
      <div className='bg-[#FFBB5C] min-h-screen w-full flex justify-center '>
        <div className='my-20 py-20 flex flex-col justify-center items-center  bg-white min-h-[70vh] min-w-[55%]'>
          <div className='text-3xl'>
            <span>NAME:</span>
            <span>{userInfo.name.toUpperCase()}</span>
          </div>
          <div className='text-3xl'>
            <span>EMAIL:</span>
            <span>{userInfo.email}</span>
          </div>
          <button className='border-2 min-w-[20%] border-black p-2 hover:bg-black hover:text-white transtion duration-150 disabled:hover:bg-white disabled:hover:text-black' onClick={openChangePassword}>Change Password</button>
        </div>
      </div>
    </>
  )
}

export default Profile