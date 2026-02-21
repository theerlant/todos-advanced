import Chip from "./atomic/chip";
import LoadingChip from "./atomic/loading_chip";

export default function TodoInfo({ itemsLength, completedCount, loading }) {
  return (
    <section id="todo-info" className="px-8 pt-16 pb-6">
      <div className="flex w-full gap-2 items-center">
        <span className="text-sm font-bold text-blue">Belum Selesai</span>
        <Chip text={itemsLength - completedCount} />
        <span className="flex flex-1 justify-center">
          {loading === true ? <LoadingChip /> : null}
        </span>
        <span className="text-sm font-bold text-purple">Selesai</span>
        <span className="*:bg-purple">
          <Chip text={`${completedCount} dari ${itemsLength}`} />
        </span>
      </div>
    </section>
  );
}
