import { Inputbox } from "../../../LoginPage/components/Inputbox";
import { Footer } from "../components/footer";
import { HeroAdmin } from "../components/HeroAdmin";
import { Navbar } from "../components/Navbar";
import React, { useState } from 'react';
import axios from 'axios'

export function AdminDashboard(){
    const [showForm, setShowForm] = useState(false);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, SetPassword] = useState();
    const [department, setDepartment] = useState();
    const [room_no, setRoom_no] = useState();

    async function handleSubmit(e){
        e.preventDefault();
        const data = {username,
            email,
            password,
            department,
            room_no,}
        
        try{
            const response = await axios.post("http://localhost:3000/admin/add" , data)  
            alert('saved data successfully')
            setShowForm(false);
        }
        catch{
            console.log('invalid inputs');
        }

    }

    return  (<>
    <div>
           {showForm && (
               <div 
                   style={{
                       position: "fixed",
                       top: 0,
                       left: 0,
                       width: "100%",
                       height: "100%",
                       backgroundColor: "rgba(0, 0, 0, 0.7)",
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center"
                   }}
                   onClick={() => setShowForm(false)}
               >
                   <div 
                       style={{
                           backgroundColor: "white",
                           padding: "20px",
                           borderRadius: "8px",
                           width: "300px",
                           position: "relative"
                       }}
                       onClick={(e) => e.stopPropagation()}
                   >
                       
                       <form>
                       <Inputbox label={"Username"} onChange={(e)=>{setUsername(e.target.value)}}></Inputbox>
                       <Inputbox label={"Password"} onChange={(e)=>{SetPassword(e.target.value)}}></Inputbox>
                       <Inputbox label={"Email"} onChange={(e)=>{setEmail(e.target.value)}}></Inputbox>
                       <Inputbox label={"Department"} onChange={(e)=>{setDepartment(e.target.value)}}></Inputbox>
                       <Inputbox label={"Room_No."} onChange={(e)=>{setRoom_no(e.target.value)}}></Inputbox>
                       <button onClick={handleSubmit} className="px-6 py-2 rounded-full bg-blue-600 font-bold hover:bg-sky-700">Submit</button>   
                           
                       </form>
                   </div>
               </div>
           )}
       </div>
    <Navbar/>
    <HeroAdmin addhod={() => setShowForm(true)}/>
    <Footer/>
       </>)}





