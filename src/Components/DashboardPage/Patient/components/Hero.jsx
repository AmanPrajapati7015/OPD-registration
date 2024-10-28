import { BUTTON } from "./BUTTON";

export function Hero(){
    return <div className="w-full h-5/6 rounded-none bg-grey flex-col justify-center items-center p-32">
<div className=" h-20 text-6xl leading-10 font-bold text-white mt-32 
  font-family: Archivo">Appointment Booking</div>
  <div className=" h-9 text-2xl leading-9 font-normal text-gray-100 mt-4  text-white
  font-family: Inter">Schedule your visit with our trusted healthcare professionals</div>
  <BUTTON label={"Book Appointment"}/>
  </div>
}