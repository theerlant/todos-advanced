import { MdCheck } from "react-icons/md";

export default function Checkbox({checked = false, onClick = () => {}}) {
    return <button
        onClick={onClick}
        className={`
            transition-colors duration-300
            flex items-center justify-center text-xs w-4.5 h-4.5 rounded-full 
            hover:cursor-pointer
            ${!checked ? 
                "border-2 border-blue hover:border-blue-dark hover:bg-blue-dark/20" :
                "bg-purple-dark text-white hover:bg-purple"
            }
            
            `}
    >
        {checked ? <MdCheck /> : null}
    </button>
}