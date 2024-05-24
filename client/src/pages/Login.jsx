import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'

function Login() {
    const [isDisable, setDisable] = useState(true)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, {isLoading}] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)

    useEffect(()=>{
        if(userInfo){
            navigate('/home')
        }
    }, [userInfo, navigate])

    const validate = (values) => {
        let errors = {}
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
        if (!values.email) {
            errors.email = '*Required'
            setDisable(true)
        }
        else if (!emailPattern.test(values.email)) {
            errors.email = '*Invalid Email ID'
            setDisable(true)
        }
        else {
            setDisable(false)
        }
        if (!values.password) {
            errors.password = '*Required'
            setDisable(true)
        }
        // else if (!passwordPattern.test(values.password)) {
        //     errors.password = '*Invalid Password'
        //     setDisable(true)
        // }
        else {
            setDisable(false)
        }
        return errors
        
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: async values => {
            // console.log(JSON.stringify(values,null,2))
            // console.log(values.email)
            try{
                const res = await login({
                    email: values.email,
                    password: values.password
                }).unwrap()
                dispatch(setCredentials({...res}))
                navigate('/home')
            }catch(err){
                console.log(err?.data?.message || err.error)
            }
        }
    })
    return (
        <>
            <div className="login flex flex-col justify-center items-center h-screen ">
                <div className="login-container bg-white flex flex-col items-center justify-center rounded-md p-5 w h-96">
                    <h1 className="login-header text-2xl">Login</h1>
                    <form className='flex flex-col items-center gap-4 my-8 w-full' onSubmit={formik.handleSubmit}>
                       <div className="form-group flex flex-col w-3/4">
                            <input type="email" name="email" id="email" className='form-field p-2' placeholder='Enter Your email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                            <label htmlFor="email" className='form-label'>Enter your Email</label>
                            {formik.touched.email && formik.errors.email ? <div className='pt-1 text-xs text-red-600'>{formik.errors.email}</div> : null}
                        </div>
                        <div className="form-group flex flex-col w-3/4">
                            <input type="password" name="password" id="password"  className='form-field p-2' placeholder='Enter Your Name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                            <label htmlFor="password" className='form-label '>Enter your Password</label>
                            {formik.touched.password && formik.errors.password ? <div className='pt-1 text-xs text-red-600'>{formik.errors.password}</div> : null}
                        </div>
                        <button type="submit" className='border-2 w-3/4 border-black p-2 hover:bg-black hover:text-white transtion duration-150 disabled:hover:bg-white disabled:hover:text-black' disabled={isDisable}>Login</button>
                        <Link to='/signup' className='form-link'>Don't have an account</Link>
                        {/* <hr className='border-1 w-full border-black my-2' />
                        <button className='border-2 w-3/4 border-black p-2 hover:bg-black hover:text-white transtion duration-150'>Login with Google</button>
                        <button className='border-2 w-3/4 border-black p-2 hover:bg-black hover:text-white transtion duration-150'>Login with Facebook</button>
                        <button className='border-2 w-3/4 border-black p-2 hover:bg-black hover:text-white transtion duration-150'>Login with Twitter</button> */}
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login