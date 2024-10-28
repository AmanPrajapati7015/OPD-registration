export function Card({label,description1,description2,img}){
    return <div className="h-36 w-3/5 p-5 flex rounded-xl mx-3">
    <div>
    <div className="font-bold text-2xl p-1 ">{label}</div>
    <div className="text-{#9095A0FF} w-80">{description1}</div>
    <div className="text-{#9095A0FF} w-80">{description2}</div>
    </div>
    <div className="rounded-md bg-cover h-28 w-28" style={{backgroundImage:`url(${img})`}} />
    </div>
}