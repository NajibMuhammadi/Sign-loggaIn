import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp  from './Comp/signUp/SignUp'
import SignIn from './Comp/signIn/SignIn'
import NavItems from './Comp/NavItems/NavItems'



function App() {
  return (
    <div className='app'>
      <NavItems />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      
         </div>
  )
}

export default App
