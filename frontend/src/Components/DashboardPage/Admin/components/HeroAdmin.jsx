import { BUTTON } from "./BUTTON";
import {useState} from 'react'
export function HeroAdmin({addhod}){
    const [HODs, setHODs] = useState([]);

    const fetchHODs = async () => {
      try {
        const response = await fetch('http://localhost:3000/admin/'); 
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setHODs(data);
      } catch (error) {
        console.error('Error fetching HODs:', error);
      }
    };

    return <div className="w-full h-screen rounded-none bg-grey grid grid-cols-2 p-16 border-b-2">
        <div className="flex flex-col justify-center items-center  font-bold text-white p-10">
        <BUTTON width={"w-full"} label={"Add department (HOD)"} onClick={addhod}/>
        <BUTTON width={"w-full"} label={"View HOD"}
        onClick={fetchHODs}/>
        <BUTTON width={"w-full"} label={"Remove Department"}/>
        
        <div className="bg-white rounded-md h-1/3 w-full mt-5 text-grey">profile info</div>
        </div>
        <div className=" flex justify-center items-center font-bold text-white m-10 p-10 ">
        <div className="h-full w-full bg-white text-grey rounded-md">
        <div>
        {HODs.map(HOD => (
          <p key={HOD._id}>Username: {HOD.username}, Department: {HOD.department}</p>
        ))}
      </div>
        </div>
        </div>
</div>
}