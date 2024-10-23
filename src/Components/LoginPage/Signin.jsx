import { Inputbox } from "./components/Inputbox"
import bgimg from "./team-young-specialist-doctors-standing-corridor-hospital.jpg" 

export function Signin(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    return <div className="w-screen h-screen lg:grid sm:flex xs:justify-center xs:items-center lg:grid-cols-2" style={{backgroundImage:`url(${bgimg})` ,backgroundSize: 'cover' ,}}>
<div className="xs:hidden lg:flex justify-center items-center text-5xl font-bold text-white  " style={{filter: 'none'}}>OPD-m</div>
<div className="flex lg:justify-start xs:justify-center items-center p-10 " style={{filter: 'none'}}>
    <div className="h-full lg:w-2/3 bg-white rounded-xl p-10 sm:w-full">
<div className="text-4xl font-bold">Sign-in</div>
<button className="w-full h-12 rounded-full border-slate-300 border-2  items-center flex justify-center my-10 hover:border-slate-400" > <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg> <span className="ml-2">Continue with Google</span></button>
<hr className="border-t-2 border-gray-300 my-10" />
<Inputbox label={"Email"} onChange={(e)=>{setEmail(e.target.value)}}></Inputbox>
<Inputbox label={"Password"} onChange={(e)=>{setPassword(e.target.value)}}></Inputbox>
<div className="mt-2 flex justify-end">
<button  onClick={async()=>{
            const response = await axios.post("" , {
              email,
              password
            })  
           localStorage.setItem("token",response.data.token) 
          }}className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-sky-700">Continue</button>
</div>
</div>
</div>
    </div>
}