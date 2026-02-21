export default function Input() {
    return <input
        type="text"
        placeholder="Tambah tugas baru"
        className={`
        transition-colors duration-300
        p-3 rounded-lg text-sm
        bg-gray-100 dark:bg-gray-500
        focus:bg-white focus:dark:bg-gray-400
        outline-2 -outline-offset-2
        outline-gray-300 dark:outline-gray-700
        hover:outline-blue-dark
        focus:outline-2 focus:outline-purple-dark
        placeholder:text-gray-300
        dark:text-gray-200 text-gray-400
        focus:dark:text-gray-100 focus:text-gray-500
        `}
    >
    </input>
}