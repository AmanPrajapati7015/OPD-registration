import { useState } from 'react'

import './App.css'
import { Signup } from './Components/LoginPage/Signup'
import { Signin } from './Components/LoginPage/Signin'
import { Landingpage } from './Components/DashboardPage/Patient/routes/dashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {


  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/landing" element={<Landingpage/>} />
        </Routes>
      </BrowserRouter>

    </div>
  </>
  )
}

export default App
