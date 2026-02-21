import { Suspense, lazy } from "react";
import Header from "./components/header";
import AddTodo from "./components/add_todo";
import TodoInfo from "./components/todo_info";
import { useTodos } from "./hooks/useTodos";
import LoadingChip from "./components/atomic/loading_chip";

const TodoList = lazy(() => import("./components/todo_list"));

function App() {
  const { items, loading, completedCount, handleToggle, handleDelete } =
    useTodos();

  return (
    <div className="min-h-dvh bg-gray-100 dark:bg-gray-600">
      <Header />
      <main>
        <AddTodo />
        <TodoInfo itemsLength={items.length} completedCount={completedCount} />
        <Suspense
          fallback={
            <span className="flex justify-center">
              <LoadingChip />
            </span>
          }
        >
          <TodoList
            items={items}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
