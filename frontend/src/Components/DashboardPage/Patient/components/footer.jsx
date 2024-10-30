import { BUTTON } from "./BUTTON";

export function Footer(){
    return <div className="h-2/5 w-screen flex flex-col justify-center items-center p-10 border-t-2 border-opacity-80">
        <div className="text-5xl text-purple font-bold my-2">Contact Us Anytime</div>
        <div className="my-2">Reach out to us 24/7 for any medical inquiries or emergencies. We're here to help you stay healthy and informed.</div>
        <BUTTON label={"Appointment"}/>
    </div>
}