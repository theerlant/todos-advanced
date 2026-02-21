import Input from "./atomic/input";
import CreateButton from "./atomic/create_button";
import { useTodos } from "../hooks/useTodos";

export default function AddTodo() {
  const { todoInput, todoError, handleAddTodoChange, handleAddTodoSubmit } =
    useTodos();

  return (
    <form
      id="add"
      onSubmit={handleAddTodoSubmit}
      className="flex flex-col px-hoz-mobile md:px-hoz-tablet xl:px-hoz-desktop gap-2 bg-linear-to-b from-gray-200 dark:from-gray-700 from-50% to-gray-100 dark:to-gray-600 to-50%"
    >
      <div className="flex w-full gap-2 *:first:w-full">
        <Input
          value={todoInput}
          onChange={handleAddTodoChange}
          error={todoError}
        />
        <CreateButton type="submit" />
      </div>
      {todoError && (
        <span className="text-red-500 text-sm font-semibold">{todoError}</span>
      )}
    </form>
  );
}
