import TaskItem from "./task_item";

export default function TodoList({ items, onToggle, onDelete }) {
  return (
    <section id="todo-list" className="flex flex-col px-8 pb-8 gap-4">
      {items.map((item) => (
        <TaskItem
          key={item.id}
          completed={item.completed}
          title={item.title}
          onCheck={() => onToggle(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </section>
  );
}
