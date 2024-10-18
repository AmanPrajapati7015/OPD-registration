export function BUTTON({label}){
    return <div>
        <button className="h-14 mt-2 flex items-center justify-center text-lg
         text-white opacity-100 px-5 rounded-md 
         hover:text-white hover:active:text-white disabled:opacity-40 bg-purple hover:bg-hcolor
         active:bg-acolor">{label}</button>
    </div>
}