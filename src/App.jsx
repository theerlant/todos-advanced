import Header from "./components/header";
import AddTodo from "./components/add_todo";
import TodoInfo from "./components/todo_info";
import { useTodos } from "./hooks/useTodos";
import LoadingChip from "./components/atomic/loading_chip";
import TodoList from "./components/todo_list";

function App() {
  const { items, loading, completedCount, handleToggle, handleDelete } =
    useTodos();

  return (
    <div className="min-h-dvh bg-gray-100 dark:bg-gray-600">
      <Header />
      <main>
        <AddTodo />
        <TodoInfo itemsLength={items.length} completedCount={completedCount} />
        {loading ? (
          <span className="flex justify-center">
            <LoadingChip />
          </span>
        ) : (
          <TodoList
            items={items}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}

export default App;
