import { memo } from "react";
import Chip from "./atomic/chip";
import LoadingChip from "./atomic/loading_chip";

const TodoInfo = memo(function TodoInfo({ itemsLength, completedCount }) {
  return (
    <section
      id="todo-info"
      className="px-hoz-mobile md:px-hoz-tablet xl:px-hoz-desktop pt-16 pb-6"
    >
      <div className="flex w-full items-center">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <span className="text-xs md:text-sm font-bold text-blue">
            Belum Selesai
          </span>
          <Chip text={itemsLength - completedCount} />
        </div>
        <span className="flex-1"></span>
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
          <span className="text-xs md:text-sm font-bold text-purple">
            Selesai
          </span>
          <span className="*:bg-purple">
            <Chip text={`${completedCount} dari ${itemsLength}`} />
          </span>
        </div>
      </div>
    </section>
  );
});

export default TodoInfo;
