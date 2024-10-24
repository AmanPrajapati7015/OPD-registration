

import './App.css'
import { Signup } from './Components/LoginPage/Signup'
import { Signin } from './Components/LoginPage/Signin'
import { Landingpage } from './Components/DashboardPage/Patient/routes/dashboard'
import { PatientDashboard } from './Components/DashboardPage/Patient/routes/patientdashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {


  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/landing" element={<Landingpage/>} />
          <Route path="/PatientDashboard" element={ <PatientDashboard/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  </>
  )
}

export default App
