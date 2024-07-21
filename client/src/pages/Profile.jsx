import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useChangePasswordMutation, useDeleteAccMutation } from '../slices/userApiSlice'
import { clearCredentials } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const {userInfo} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [changePassword, {isLoading}] = useChangePasswordMutation()
  const [deleteAcc, {isLoadingDelete}] = useDeleteAccMutation()

  const openChangePassword = async () =>{
    const newPassword = window.prompt("Enter your new Password")
    try{
      const res = await changePassword({
        newPassword
      })
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  const openDeleteAcc = async () =>{
    const delOk = window.confirm("WARNING! Are you sure you want to delete the account?")
    if(delOk){
      try{
        const res = await deleteAcc()
        dispatch(clearCredentials())
        navigate('/')
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
  }
  return (
    <>
      <div className='bg-[#FFBB5C] min-h-screen w-full flex justify-center '>
        <div className='my-20 p-20 flex flex-col justify-center bg-white min-h-[70vh] min-w-[55%]'>
          <div className='text-3xl mb-2'>
            <span>NAME:</span>
            <span>{userInfo.name.toUpperCase()}</span>
          </div>
          <div className='text-3xl mb-2'>
            <span>EMAIL:</span>
            <span>{userInfo.email}</span>
          </div>
          <div className='my-7 w-[55%] flex justify-between'>
            <button className='border-2  min-w-[20%] border-black p-2 hover:bg-black hover:text-white transtion duration-150 disabled:hover:bg-white disabled:hover:text-black' onClick={openChangePassword}>Change Password</button>
            {/* <button className='border-2  min-w-[20%]  border-black p-2 hover:bg-red-600  transtion duration-150 disabled:hover:bg-white disabled:hover:text-black' onClick={openDeleteAcc}>Delete Account</button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile