import { memo } from "react";
import TaskItem from "./task_item";
import EmptyList from "./empty_list";

const TodoList = memo(function TodoList({ items, onToggle, onDelete }) {
  return (
    <section
      id="todo-list"
      className="flex flex-col px-hoz-mobile md:px-hoz-tablet xl:px-hoz-desktop pb-8 gap-4"
    >
      {items.length ? (
        items.map((item) => (
          <TaskItem
            key={item.id}
            completed={item.completed}
            title={item.title}
            onCheck={() => onToggle(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        ))
      ) : (
        <EmptyList />
      )}
    </section>
  );
});

export default TodoList;
