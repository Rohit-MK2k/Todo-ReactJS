import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Splash from './pages/Splash'
import Todo from './pages/Todo'
import NamePage from './pages/NamePage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Splash/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/home' element={<Todo />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
