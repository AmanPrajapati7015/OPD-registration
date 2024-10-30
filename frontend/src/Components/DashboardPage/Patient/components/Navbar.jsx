export function Navbar(){

    return <div className="w-screen h-14  px-24 py-2 bg-white flex justify-between">
    <span className="text-2xl  font-bold text-black font-family: Archivo">OPD-m</span>
    <div className=" flex items-center justify-center text-sm  mr-52 font-bold text-purple opacity-90
    font-family: Inter">
      <a className="px-3" href="/Home">Home</a>
      <a className="px-3" href="About">About</a>
      <a className="px-3" href="Departments">Departments</a>
      <a className="px-3" href="Doctors">Doctors</a>
      <a className="px-3" href="Pages">Pages</a>
    </div>
    <div className="flex">
    <button className="w-40 mx-5 h-9 flex items-center justify-center text-sm  text-[#636AE8FF] opacity-100 border px-3 py-0 rounded-lg border-[#636AE8FF] border-solid left-[1080px] top-2.5 hover:text-[#4850E4FF] hover:active:text-[#2C35E0FF] disabled:opacity-40
    font-family: Inter   
    background: #ffffffff">Contact</button>
    <button className=" w-40 h-9 flex items-center justify-center text-sm  text-white opacity-100 px-3 py-0 rounded-lg  left-[1256px] top-2.5 hover:text-white hover:active:text-white disabled:opacity-40 bg-purple
    
    font-family: Inter
    ">Appointment</button>
    </div>
    </div>
}