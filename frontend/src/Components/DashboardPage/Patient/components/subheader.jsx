import { Card } from "./card";
import img from "./service.png"
import img1 from "./263.png"
import img2 from "./272.png"
import img3 from "./280.png"
import img4 from "./341.png"
export function Subheader(){
    return <div className="h-4/6 w-full p-20 flex flex-col justify-center items-center">
        <div className="text-4xl font-bold flex-col flex justify-center items-center">
        <div className="my-3">Sub Header Department Section</div>
        <div className="my-3">Our Departments</div>
        </div>
        <div>
            <div className="flex justify-center items-center m-5">
                <Card label={"Heart"} img={img1} description1={"Comprehensive heart care services including"} description2={"diagnostics, treatments, and rehabilitation."}/>
                <Card label={"Eye"} img={img2} description1={"Advanced eye care services, including vision"} description2={"correction and preventative care."} />
            </div>
            <div className="flex justify-center items-center m-5">
                <Card label={"Dental"} img={img3} description1={"Comprehensive ENT services from routine"} description2={"examinations to advanced treatments and procedures."}/>
                <Card label={"Women's Health"} img={img4} description1={"Specialized services for women's health"} description2={"including gynecology and maternity care."}/>
            </div>
        </div>
    </div>
}