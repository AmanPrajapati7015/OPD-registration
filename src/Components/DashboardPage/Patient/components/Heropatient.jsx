import { BUTTON } from "./BUTTON";

export function Heropatient(){
    return <div className="w-full h-screen rounded-none bg-grey grid grid-cols-2 p-16 border-b-2">
        <div className="flex flex-col justify-center items-center  font-bold text-white p-10">
        <BUTTON width={"w-full"} label={"Book Appointment"}/>
        <BUTTON width={"w-full"} label={"View Appointments"}/>
        <BUTTON width={"w-full"} label={"Cancel Appointment"}/>
        <BUTTON width={"w-full"} label={"Print Appointment Slip"}/>
        
        <div className="bg-white rounded-md h-1/3 w-full mt-5 text-grey">profile info</div>
        </div>
        <div className=" flex justify-center items-center font-bold text-white m-10 p-10 ">
        <div className="h-full w-full bg-white text-grey rounded-md">calender</div>
        </div>
</div>
}