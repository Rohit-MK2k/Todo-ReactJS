import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Splash from './pages/Splash'
import Todo from './pages/Todo'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import Home from './pages/Home'
import About from './pages/About'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Splash/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='' element={<PrivateRoute/>}>
            <Route path='/home' element={<Home/>}>
              <Route index element={<Todo />}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='about' element={<About/>}/>
            </Route> 
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
