
export function Inputbox({label,onChange}){
    return <div className="flex-col justify-center items-center py-4">
        <input type="text" placeholder={label} onChange={onChange} className="h-10 w-full border-slate-400 border-2 rounded-xl p-3" />
    </div>
}