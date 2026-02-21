import Checkbox from "./atomic/checkbox";
import DeleteButton from "./atomic/delete_button";

const placeholderTitle =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae aliquam maiores totam quod voluptatem labore blanditiis, illo.";

export default function TaskItem({
  title = placeholderTitle,
  completed = false,
  onCheck = () => {},
  onDelete = () => {},
}) {
  return (
    <div
      className={`
        flex items-start gap-3 p-3 rounded-lg border
        dark:bg-gray-500 
        ${completed ? "bg-gray-200" : "bg-gray-100"} 
        ${completed ? "border-gray-100 dark:border-gray-500" : "border-gray-500 dark:border-gray-400"}
      `}
    >
      <Checkbox checked={completed} onClick={onCheck} />
      <p
        className={`
            flex-1 text-sm leading-normal
            ${completed ? "line-through text-gray-300" : "text-gray-500 dark:text-gray-100"}
          `}
      >
        {title}
      </p>
      <DeleteButton onClick={onDelete} />
    </div>
  );
}
