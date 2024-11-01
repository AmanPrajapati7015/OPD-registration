export function Navbar(){
    return <div className="border-b-2 border-white h-13 w-screen flex justify-between">
    <div className="font-bold text-white m-3"><span className="m-3 font-extrabold">CMD-m</span>Patient Dashboard</div>
    <div className="flex justify-end">
        <div><input type="text" placeholder="Search" className="p-2 w-48 h-7  text-dulwhite bg-ltblack m-3 rounded-md"/></div>
        <div className="h-7 w-7 m-3  bg-ltblack rounded-md"></div>
        <div className="h-7 w-7 m-3 ml-0 bg-ltblack rounded-md"></div>
    </div>
</div>
}