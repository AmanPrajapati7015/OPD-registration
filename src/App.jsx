


import './App.css'
import { Signup } from './Components/LoginPage/Signup'
import { Signin } from './Components/LoginPage/Signin'
import { Landingpage } from './Components/DashboardPage/Patient/routes/dashboard'
import { PatientDashboard } from './Components/DashboardPage/Patient/routes/patientdashboard'
import AdminDashboard from './Pages/DashboardPage/Admin/Admin'
import HODd from './Pages/DashboardPage/HOD/HODd'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {


  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Landingpage/>} />
          <Route path="/PatientDashboard" element={ <PatientDashboard/>}/>
          <Route path="/HODDashboard" element={ <HODd/>}/>


        </Routes>
      </BrowserRouter>

    </div>
  </>
  )
}
export default App
