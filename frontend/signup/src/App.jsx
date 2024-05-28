import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp  from './Comp/signUp/SignUp'
import SignIn from './Comp/signIn/SignIn'
import NavItems from './Comp/NavItems/NavItems'
import HomePage from './Comp/homePage/HomePage'



function App() {
  return (
    <div className='app'>
      <NavItems />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/admin' element={<HomePage />} />
      </Routes>
      
         </div>
  )
}

export default App
