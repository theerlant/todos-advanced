import Header from "./components/header";
import AddTodo from "./components/add_todo";
import TodoInfo from "./components/todo_info";
import TodoList from "./components/todo_list";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { items, loading, completedCount, handleToggle, handleDelete } =
    useTodos();

  return (
    <div className="min-h-dvh bg-gray-100 dark:bg-gray-600">
      <Header />
      <main>
        <AddTodo />
        <TodoInfo
          itemsLength={items.length}
          completedCount={completedCount}
          loading={loading}
        />
        <TodoList
          items={items}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
