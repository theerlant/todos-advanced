import Input from "./atomic/input";
import CreateButton from "./atomic/create_button";

export default function AddTodo() {
  return (
    <section
      id="add"
      className="flex px-8 gap-2 bg-linear-to-b from-gray-200 dark:from-gray-700 from-50% to-gray-100 dark:to-gray-600 to-50% *:first:w-full"
    >
      <Input />
      <CreateButton />
    </section>
  );
}
