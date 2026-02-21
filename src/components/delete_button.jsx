import { MdDeleteOutline } from "react-icons/md";

export default function DeleteButton({onClick = () => {}}) {
    return <button onClick={onClick}
        className="p-1 text-lg text-gray-300 hover:bg-danger/20 hover:text-danger hover:cursor-pointer rounded-4xl hover:rounded-sm transition-all duration-300"
    >
        <MdDeleteOutline />
    </button>
}