import { memo } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const CreateButton = memo(function CreateButton({
  onClick = () => {},
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center gap-2 p-2 md:p-3 py-3 md:py-4 rounded-lg bg-blue-dark hover:bg-blue text-gray-100 hover:cursor-pointer transition-colors duration-300"
    >
      <span className="text-xs md:text-sm font-bold">Tambah</span>
      <MdAddCircleOutline className="text-base" />
    </button>
  );
});

export default CreateButton;
