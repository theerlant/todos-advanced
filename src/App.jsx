import CreateButton from "./components/create_button"
import Input from "./components/input"
import Chip from "./components/chip"
import TaskItem from "./components/task_item"

function App() {
  return (
<div data-theme="dark" className="bg-gray-100">
        <header className="flex px-8 py-16 justify-center bg-gray-200 dark:bg-gray-700">
      <img src="logo.svg" alt="todo logo"/>
    </header>
    <main>
      <section id="add" 
      className="flex px-8 gap-2 bg-linear-to-b from-gray-200 dark:from-gray-700 from-50% to-gray-100 dark:to-gray-600 to-50% *:first:w-full">
        <Input />
        <CreateButton />
      </section>
      <section id="todo-info"
        className="px-8 pt-16 pb-6 bg-gray-600"
      >
        <div className="flex w-full gap-2 items-center">
          <span className="text-sm font-bold text-blue">Belum Selesai</span>
          <Chip text="3" />
          <span className="flex-1" />
          <span className="text-sm font-bold text-purple">Selesai</span>
          <span className="*:bg-purple"><Chip text="2 dari 5" /></span>
        </div>
      </section>
      <section id="todo-list" className="flex flex-col px-8 pb-8 gap-4 bg-gray-600">
        {Array.from({length: 5}).map((_, i) => <TaskItem completed={i > 2} />)}
      </section>
    </main>
</div>
  )
}

export default App
