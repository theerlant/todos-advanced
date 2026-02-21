import { memo } from "react";
import Chip from "./atomic/chip";
import LoadingChip from "./atomic/loading_chip";

const TodoInfo = memo(function TodoInfo({ itemsLength, completedCount }) {
  return (
    <section id="todo-info" className="px-8 pt-16 pb-6">
      <div className="flex w-full gap-2 items-center">
        <span className="text-sm font-bold text-blue">Belum Selesai</span>
        <Chip text={itemsLength - completedCount} />
        <span className="flex-1"></span>
        <span className="text-sm font-bold text-purple">Selesai</span>
        <span className="*:bg-purple">
          <Chip text={`${completedCount} dari ${itemsLength}`} />
        </span>
      </div>
    </section>
  );
});

export default TodoInfo;
